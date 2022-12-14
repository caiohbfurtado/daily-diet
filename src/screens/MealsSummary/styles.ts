import styled, { css } from 'styled-components/native'
import { Platform } from 'react-native'

type StyledContainerProps = {
  percent?: number
}

export const Container = styled.View<StyledContainerProps>`
  flex: 1;

  ${({ theme, percent }) =>
    percent &&
    css`
      background-color: ${percent >= 50
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}

  ${({ theme, percent }) =>
    !percent &&
    css`
      background-color: ${theme.COLORS.WHITE};
    `}
`

export const HeaderTexts = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: ${Platform.OS === 'android' ? 44 : 24}px;
  padding-bottom: ${Platform.OS === 'android' ? 34 : 0}px;
`
export const PercentText = styled.Text`
  margin-bottom: 2px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Content = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 33px 24px;

  ${({ theme }) => css`
    background: ${theme.COLORS.WHITE};
    border-top-right-radius: ${theme.BORDER_RADIUS.LG}px;
    border-top-left-radius: ${theme.BORDER_RADIUS.LG}px;
  `};
`

export const Label = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const Cards = styled.View`
  margin-top: 24px;
`

export const InlineCards = styled.View`
  flex-direction: row;
`
