import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_5};
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

export const Form = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`
