import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  min-height: 34px;
  max-height: 34px;
  padding: 8px 16px;
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.COLORS.GRAY_6};
    border-radius: ${theme.BORDER_RADIUS.LG}px;
  `}
`

export const BadgeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`
