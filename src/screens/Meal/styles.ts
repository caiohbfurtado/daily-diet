import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const Content = styled.View`
  flex: 1;
  padding: 40px 24px;

  ${({ theme }) => css`
    background: ${theme.COLORS.WHITE};
    border-top-right-radius: ${theme.BORDER_RADIUS.LG}px;
    border-top-left-radius: ${theme.BORDER_RADIUS.LG}px;
  `};
`

export const Infos = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
export const Text = styled.Text`
  margin-bottom: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`
