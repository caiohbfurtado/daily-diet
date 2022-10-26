import { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import { Input } from '@components/Input'

import * as S from './styles'
import { Select } from '@components/Select'
import { Button } from '@components/Button'

export function NewMeal() {
  const theme = useTheme()
  const navigation = useNavigation()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  const [inside, setInside] = useState('')

  function handleGoHome() {
    navigation.navigate('Home')
  }

  return (
    <S.Container>
      <S.Header>
        <S.BackButton onPress={handleGoHome}>
          <ArrowLeft size={24} color={theme.COLORS.GRAY_2} />
        </S.BackButton>
        <S.Title>Nova refeição</S.Title>
      </S.Header>

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

          <S.Label>Está dentro da dieta?</S.Label>
          <View style={{ flexDirection: 'row' }}>
            <Select
              title="Sim"
              selected={inside === 'yes'}
              onPress={() => setInside('yes')}
              mr
            />
            <Select
              title="Não"
              selected={inside === 'no'}
              onPress={() => setInside('no')}
            />
          </View>
        </S.Form>
        <Button title="Cadastrar refeição" />
      </S.Content>
    </S.Container>
  )
}
