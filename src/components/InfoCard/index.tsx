import { useMemo } from 'react'
import { useTheme } from 'styled-components'
import * as S from './styles'

type Props = {
  backgroundColor?: 'success' | 'failure' | 'default'
  value: number
  text: string
}

export function InfoCard({ text, value, backgroundColor = 'default' }: Props) {
  const theme = useTheme()

  const backgroundColorTheme = useMemo(() => {
    switch (backgroundColor) {
      case 'success':
        return theme.COLORS.GREEN_LIGHT
      case 'failure':
        return theme.COLORS.RED_LIGHT
      default:
        return theme.COLORS.GRAY_6
    }
  }, [theme, backgroundColor])

  return (
    <S.Container backgroundColor={backgroundColorTheme}>
      <S.Title>{value}</S.Title>
      <S.Text>{text}</S.Text>
    </S.Container>
  )
}
