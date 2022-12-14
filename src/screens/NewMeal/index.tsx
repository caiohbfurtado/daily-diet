import { useRef, useState } from 'react'
import { Alert, TextInput, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'

import * as S from './styles'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Header } from '@components/Header'
import { AppError } from '@utils/AppError'
import { createNewMeal } from '@storage/meals/createNewMeal'
import uuid from 'react-uuid'
import { stringToDate } from '@utils/stringToDate'

type StatusProps = 'failure' | 'success'

export function NewMeal() {
  const navigation = useNavigation()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [hour, setHour] = useState('')
  const [status, setStatus] = useState('' as StatusProps)
  const descriptionRef = useRef<TextInput>(null)
  const dateRef = useRef<TextInput>(null)
  const hourRef = useRef<TextInput>(null)

  async function handleAddNewMeal() {
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

      const id = uuid()

      const newDate = stringToDate(date)

      const newMeal = {
        id,
        description,
        hour,
        status,
        title,
        date: newDate,
      }

      await createNewMeal(newMeal)
      navigation.navigate('Feedback', { status })
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Adicionar refeição', error.message)
      } else {
        Alert.alert(
          'Adicionar refeição',
          'Não foi possível cadastrar refeição.',
        )
        console.log(error)
      }
    }
  }

  return (
    <S.Container>
      <Header title="Nova refeição" />

      <S.Content>
        <S.Form>
          <Input
            autoFocus
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
        <Button title="Cadastrar refeição" onPress={handleAddNewMeal} />
      </S.Content>
    </S.Container>
  )
}
