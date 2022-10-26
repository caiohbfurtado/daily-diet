import styled, { css } from 'styled-components/native'
import { ArrowUpRight } from 'phosphor-react-native'
import { View } from 'react-native'

type StyledPercentProps = {
  percent: number
}

export const Container = styled.TouchableOpacity<StyledPercentProps>`
  width: 100%;
  min-height: 102px;
  max-height: 102px;
  align-items: center;
  justify-content: center;

  ${({ theme, percent }) => css`
    background: ${percent >= 50
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
    border-radius: ${theme.BORDER_RADIUS.MD}px;
  `}
`

export const PercentText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const InfoText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Icon = styled(ArrowUpRight)`
  position: absolute;
  right: 14px;
  top: 14px;
`
