import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import { Header } from '@components/Header'
import { Label } from '@components/Label'
import { Badge } from '@components/Badge'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'

import * as S from './styles'

import { getMealById } from '@storage/meals/getMealById'
import { MealDTO } from '@storage/meals/MealStorageDTO'
import { deleteMealById } from '@storage/meals/deleteMealById'

import { formatDate } from '@utils/formatDate'

type RouteParamsProps = {
  id: string
}

export function Meal() {
  const navigation = useNavigation()
  const [meal, setMeal] = useState<MealDTO>({} as MealDTO)
  const [date, setDate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const { params } = useRoute()
  const { id } = params as RouteParamsProps

  function handleEditMeal() {
    navigation.navigate('EditMeal', { id })
  }

  const fetchMealById = useCallback(async () => {
    try {
      setIsLoading(true)
      const meal = await getMealById(id)
      setDate(formatDate(meal.date))
      setMeal(meal)
    } catch (error) {
      Alert.alert('Refeição', 'Não foi possível buscar os dados da refeição')
      console.log(error)
      navigation.navigate('Home')
    } finally {
      setIsLoading(false)
    }
  }, [id, navigation])

  useFocusEffect(
    useCallback(() => {
      fetchMealById()
    }, [fetchMealById]),
  )

  async function deleteMeal() {
    try {
      await deleteMealById(id)
      navigation.navigate('Home')
    } catch (error) {
      console.log(error)
    }
  }

  function handleDeleteMealById() {
    Alert.alert(
      'Remover refeição',
      'Deseja realmente remover a refeição selecionada?',
      [
        { text: 'Sim', onPress: () => deleteMeal() },
        { text: 'Não', style: 'cancel' },
      ],
    )
  }

  if (isLoading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    )
  }

  return (
    <S.Container status={meal.status}>
      <Header title="Refeição" />

      <S.Content>
        <S.Infos>
          <S.Title>{meal.title}</S.Title>
          <S.Text>{meal.description}</S.Text>

          <Label title="Data e hora" />
          <S.Text>
            {date} às {meal.hour}
          </S.Text>

          <Badge status={meal.status} />
        </S.Infos>

        <Button title="Editar refeição" icon="edit" onPress={handleEditMeal} />
        <Button
          title="Excluir refeição"
          icon="delete"
          type="outline"
          onPress={handleDeleteMealById}
          style={{ marginTop: 8 }}
        />
      </S.Content>
    </S.Container>
  )
}
