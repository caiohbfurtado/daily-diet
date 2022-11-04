import { useCallback, useState } from 'react'
import { Alert, Image, SectionList } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { PercentCard } from '@components/PercentCard'
import { Avatar } from '@components/Avatar'
import { MealCard } from '@components/MealCard'
import { SectionHeader } from '@components/SectionHeader'
import { Loading } from '@components/Loading'
import { EmptySectionList } from '@components/EmptySectionList'

import logoImg from '@assets/logo.png'

import * as S from './styles'

import { MealStorageDTO } from '@storage/meals/MealStorageDTO'
import { getAllMeals } from '@storage/meals/getAllMeals'

import { getPercentOfSuccess } from '@utils/getPercentOfSuccess'
import { formatDate } from '@utils/formatDate'

export function Home() {
  const [meals, setMeals] = useState<MealStorageDTO[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [percent, setPercent] = useState<number | undefined>(undefined)
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  async function fetchMeals() {
    try {
      setIsLoading(true)
      const storagedMeals = await getAllMeals()
      const dateMeals = storagedMeals.map((meal) => meal.date)
      const uniqueDates = Array.from(new Set(dateMeals))
      const mealsByDate = uniqueDates
        .sort((d1, d2) => new Date(d1).getTime() + new Date(d2).getTime())
        .map((date) => {
          return {
            date: formatDate(date),
            data: storagedMeals.filter((meal) => meal.date === date),
          }
        })
      setMeals(mealsByDate)

      const percentOfSuccess = await getPercentOfSuccess()
      setPercent(percentOfSuccess)
    } catch (error) {
      console.log(error)
      Alert.alert('Refeições', 'Não foi possível carregar as refeições')
    } finally {
      setIsLoading(false)
    }
  }

  function handleGoMeal(id: string) {
    navigation.navigate('Meal', { id })
  }

  function handleGoMealsSummary() {
    navigation.navigate('MealsSummary')
  }

  function handleGoNewMeal() {
    navigation.navigate('NewMeal')
  }

  if (isLoading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <Avatar />
      </S.Header>
      {percent !== undefined && (
        <PercentCard percent={percent} onPress={handleGoMealsSummary} />
      )}

      <S.Content>
        <S.Text>Refeições</S.Text>
        <Button
          title="Nova refeição"
          full
          icon="add"
          onPress={handleGoNewMeal}
        />
      </S.Content>

      <SectionList
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealCard
            title={item.title}
            hour={item.hour}
            status={item.status}
            onPress={() => handleGoMeal(item.id)}
          />
        )}
        renderSectionHeader={({ section: { date } }) => {
          return <SectionHeader title={date} />
        }}
        ListEmptyComponent={<EmptySectionList />}
        contentContainerStyle={
          meals.length === 0
            ? { flex: 1, alignItems: 'center' }
            : {
                paddingBottom: 36,
              }
        }
        style={{ marginTop: 32 }}
      />
    </S.Container>
  )
}
