import styled, { css } from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 28px;
  top: 56px;
  z-index: 2;
`

export const Title = styled.Text`
  padding-top: 9px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
