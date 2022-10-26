import { ReactNode } from 'react'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeft } from 'phosphor-react-native'

import * as S from './styles'

type Props = {
  onPressBackButton?: () => void
  title?: string
  arrowColor?: string
  children?: ReactNode
}

export function Header({
  arrowColor,
  onPressBackButton,
  children,
  title,
}: Props) {
  const navigation = useNavigation()
  const theme = useTheme()

  function handlePressBackButton() {
    if (onPressBackButton) {
      return onPressBackButton()
    }

    navigation.navigate('Home')
  }

  return (
    <S.Container>
      <S.BackButton onPress={handlePressBackButton}>
        <ArrowLeft size={24} color={arrowColor ?? theme.COLORS.GRAY_2} />
      </S.BackButton>
      {title ? <S.Title>{title}</S.Title> : children}
    </S.Container>
  )
}
