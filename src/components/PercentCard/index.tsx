import { useMemo } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { NumberFormat } from 'intl'

import * as S from './styles'
import { useTheme } from 'styled-components/native'

type Props = TouchableOpacityProps & {
  percent: number
}

export function PercentCard({ percent, ...rest }: Props) {
  const theme = useTheme()

  const percentCurrentValue = useMemo(() => {
    return new NumberFormat('pt-BR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(percent)
  }, [percent])

  const colorIcon = useMemo(() => {
    return percent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  }, [percent, theme])

  return (
    <S.Container percent={percent} {...rest}>
      <S.PercentText>{percentCurrentValue}%</S.PercentText>
      <S.InfoText>das refeições dentro da dieta</S.InfoText>

      <S.Icon color={colorIcon} size={24} />
    </S.Container>
  )
}
