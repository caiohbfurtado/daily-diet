import { useMemo } from 'react'
import { View } from 'react-native'

import { useTheme } from 'styled-components'

import { Header } from '@components/Header'
import { InfoCard } from '@components/InfoCard'

import { formatPercentValue } from '@utils/formatPercentValue'

import * as S from './styles'

export function MealsSummary() {
  const theme = useTheme()
  const percent = 98.52

  const percentFormatValue = useMemo(
    () => formatPercentValue(percent),
    [percent],
  )

  const arrowColor = useMemo(
    () => (percent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK),
    [percent, theme],
  )

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
            value={22}
            text="melhor sequência de pratos dentro da dieta"
          />
          <InfoCard value={109} text="refeições registradas" />

          <S.InlineCards>
            <View style={{ flex: 1 }}>
              <InfoCard
                value={99}
                text="refeições dentro da dieta"
                backgroundColor="success"
              />
            </View>
            <View style={{ marginLeft: 12, flex: 1 }}>
              <InfoCard
                value={99}
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
