import { useCallback, useMemo, useState } from 'react'
import { Alert, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import * as S from './styles'

import { Header } from '@components/Header'
import { InfoCard } from '@components/InfoCard'
import { Loading } from '@components/Loading'

import { formatPercentValue } from '@utils/formatPercentValue'

import { MealDTO } from '@storage/meals/MealStorageDTO'
import { getAllMeals } from '@storage/meals/getAllMeals'
import { getPercentOfSuccess } from '@utils/getPercentOfSuccess'
import { getBestSuccessStatusSequence } from '@storage/meals/getBestSuccessStatusSequence'

export function MealsSummary() {
  const [meals, setMeals] = useState<MealDTO[]>([])
  const [percent, setPercent] = useState(0)
  const [successMeals, setSuccessMeals] = useState(0)
  const [failureMeals, setFailureMeals] = useState(0)
  const [maxSuccess, setMaxSuccess] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const theme = useTheme()
  const navigation = useNavigation()

  useFocusEffect(
    useCallback(() => {
      getInfos()
    }, []),
  )

  async function getInfos() {
    try {
      setIsLoading(true)
      const storagedMeals = await getAllMeals()
      const storagedSuccessMeals = storagedMeals.reduce(
        (accSuccessMeals, currSuccessMeals) =>
          currSuccessMeals.status === 'success'
            ? (accSuccessMeals += 1)
            : accSuccessMeals,
        0,
      )

      const bestSuccessStatusSequence = await getBestSuccessStatusSequence()
      const currentPercent = await getPercentOfSuccess()

      setSuccessMeals(storagedSuccessMeals)
      setFailureMeals(storagedMeals.length - storagedSuccessMeals)
      setMeals(storagedMeals)
      setMaxSuccess(bestSuccessStatusSequence)
      setPercent(currentPercent ?? 0)
    } catch (error) {
      Alert.alert(
        'Editar refeição',
        'Não foi possível buscar os dados para editar a refeição',
      )
      console.log(error)
      navigation.navigate('Home')
    } finally {
      setIsLoading(false)
    }
  }

  const percentFormatValue = useMemo(
    () => formatPercentValue(percent),
    [percent],
  )

  const arrowColor = useMemo(
    () => (percent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
    [percent, theme],
  )

  if (isLoading) {
    return (
      <S.Container>
        <Loading />
      </S.Container>
    )
  }

  return (
    <S.Container percent={percent}>
      <Header arrowColor={arrowColor}>
        <S.HeaderTexts>
          <S.PercentText>{percentFormatValue}</S.PercentText>
          <S.Text>das refeições dentro da lista</S.Text>
        </S.HeaderTexts>
      </Header>

      <S.Content>
        <S.Label>Estatísticas gerais</S.Label>

        <S.Cards>
          <InfoCard
            value={maxSuccess}
            text="melhor sequência de pratos dentro da dieta"
          />
          <InfoCard value={meals.length} text="refeições registradas" />

          <S.InlineCards>
            <View style={{ flex: 1 }}>
              <InfoCard
                value={successMeals}
                text="refeições dentro da dieta"
                backgroundColor="success"
              />
            </View>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <InfoCard
                value={failureMeals}
                text="refeições fora da dieta"
                backgroundColor="failure"
              />
            </View>
          </S.InlineCards>
        </S.Cards>
      </S.Content>
    </S.Container>
  )
}
