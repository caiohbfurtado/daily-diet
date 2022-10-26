import { useMemo } from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { formatPercentValue } from '../../utils/formatPercentValue'

type Props = TouchableOpacityProps & {
  percent: number
}

export function PercentCard({ percent, ...rest }: Props) {
  const theme = useTheme()

  const percentFormatValue = useMemo(
    () => formatPercentValue(percent),
    [percent],
  )

  const colorIcon = useMemo(() => {
    return percent >= 50 ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  }, [percent, theme])

  return (
    <S.Container percent={percent} {...rest}>
      <S.PercentText>{percentFormatValue}</S.PercentText>
      <S.InfoText>das refeições dentro da dieta</S.InfoText>

      <S.Icon color={colorIcon} size={24} />
    </S.Container>
  )
}
