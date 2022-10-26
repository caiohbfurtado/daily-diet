import { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'

import * as S from './styles'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { Label } from '@components/Label'
import { Header } from '../../components/Header'

export function NewMeal() {
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [status, setStatus] = useState('')

  function handleAddNewMeal() {
    navigation.navigate('Feedback', { status: 'failure' })
  }

  return (
    <S.Container>
      <Header title="Nova refeição" />

      <S.Content>
        <S.Form>
          <Input label="Nome" value={name} onChangeText={setName} />
          <Input
            label="Descrição"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Input label="Data" value={day} onChangeText={setDay} />
            </View>
            <View style={{ flex: 1, marginLeft: 18 }}>
              <Input label="Hora" value={hour} onChangeText={setHour} />
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
