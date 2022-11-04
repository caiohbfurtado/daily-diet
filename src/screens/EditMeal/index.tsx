import { useCallback, useEffect, useRef, useState } from 'react'
import { Alert, TextInput, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import * as S from './styles'

import { Input } from '@components/Input'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Header } from '@components/Header'
import { Loading } from '@components/Loading'

import { getMealById } from '@storage/meals/getMealById'
import { updateMealById } from '@storage/meals/updateMealById'

import { formatDate } from '@utils/formatDate'
import { stringToDate } from '@utils/stringToDate'
import { AppError } from '@utils/AppError'

type RouteParamsProps = {
  id: string
}

type StatusProps = 'failure' | 'success'

export function EditMeal() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [status, setStatus] = useState('' as StatusProps)
  const { params } = useRoute()
  const { id } = params as RouteParamsProps
  const descriptionRef = useRef<TextInput>(null)
  const dateRef = useRef<TextInput>(null)
  const hourRef = useRef<TextInput>(null)

  const getMealInfo = useCallback(async () => {
    try {
      setIsLoading(true)
      const mealInfo = await getMealById(id)
      setTitle(mealInfo.title)
      setDescription(mealInfo.description)
      const date = formatDate(mealInfo.date)
      setDate(date)
      setHour(mealInfo.hour)
      setStatus(mealInfo.status)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Editar refeição',
        'Não foi possível buscar os dados da refeição',
      )
      navigation.goBack()
    } finally {
      setIsLoading(false)
    }
  }, [id, navigation])

  useEffect(() => {
    getMealInfo()
  }, [getMealInfo])

  function handleGoBack() {
    navigation.goBack()
  }

  if (isLoading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    )
  }

  async function updateMeal() {
    try {
      if (!title.trim()) {
        throw new AppError('Informe um título válido.')
      }

      if (!description.trim()) {
        throw new AppError('Informe uma descrição válida.')
      }

      if (!date.trim() || date.length < 8) {
        throw new AppError('Informe uma data válida.')
      }

      if (!hour.trim() || hour.length < 5) {
        throw new AppError('Informe uma hora válida.')
      }

      if (!status.trim()) {
        throw new AppError('Informe uma hora válida.')
      }

      const newDate = stringToDate(date)

      const newMeal = {
        title,
        description,
        date: newDate,
        hour,
        status,
      }
      await updateMealById(id, newMeal)

      navigation.goBack()
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message)
      } else {
        Alert.alert('Editar refeição', 'Não foi possível editar a refeição.')
        console.log(error)
      }
    }
  }

  function handleUpdateMeal() {
    Alert.alert(
      'Salvar alterações',
      'Deseja salvar as alterações? Isso irá sobrescrever os dados.',
      [
        { text: 'Sim', onPress: () => updateMeal() },
        { text: 'Não', style: 'cancel' },
      ],
    )
  }

  return (
    <S.Container>
      <Header title="Editar refeição" onPressBackButton={handleGoBack} />

      <S.Content>
        <S.Form>
          <Input
            returnKeyType="next"
            label="Nome"
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={() => descriptionRef.current?.focus()}
          />
          <Input
            inputRef={descriptionRef}
            label="Descrição"
            multiline
            value={description}
            onChangeText={setDescription}
            textAlignVertical="top"
            returnKeyType="next"
            onSubmitEditing={() => dateRef.current?.focus()}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Input
                inputRef={dateRef}
                label="Data"
                value={date}
                onChangeText={setDate}
                formatType="date"
                keyboardType="numeric"
                returnKeyType="next"
                onSubmitEditing={() => hourRef.current?.focus()}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 18 }}>
              <Input
                inputRef={hourRef}
                label="Hora"
                value={hour}
                onChangeText={setHour}
                formatType="hour"
                keyboardType="numeric"
                returnKeyType="done"
              />
            </View>
          </View>

          <Label title="Está dentro da dieta?" />
          <View style={{ flexDirection: 'row' }}>
            <Select
              title="Sim"
              selected={status === 'success'}
              onPress={() => setStatus('success')}
              mr
            />
            <Select
              title="Não"
              selected={status === 'failure'}
              onPress={() => setStatus('failure')}
            />
          </View>
        </S.Form>
        <Button title="Salvar alterações" onPress={handleUpdateMeal} />
      </S.Content>
    </S.Container>
  )
}
