import { FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { PercentCard } from '@components/PercentCard'
import { Avatar } from '@components/Avatar'
import { MealCard } from '@components/MealCard'

import logoImg from '@assets/logo.png'

import * as S from './styles'

export function Home() {
  const navigation = useNavigation()

  function handleGoToNewMeal() {
    navigation.navigate('NewMeal')
  }

  return (
    <S.Container>
      <S.Header>
        <Image source={logoImg} />
        <Avatar />
      </S.Header>
      <PercentCard percent={90.86} />

      <S.Content>
        <S.Text>Refeições</S.Text>
        <Button
          title="Nova refeição"
          full
          icon="add"
          onPress={handleGoToNewMeal}
        />
      </S.Content>

      <FlatList
        data={['Bla', 'Blabla']}
        renderItem={({ item }) => (
          <MealCard title="X-tudo" hour="20:00" status="out" />
        )}
        style={{ marginTop: 32 }}
      />
    </S.Container>
  )
}
