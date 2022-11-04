import styled, { css } from 'styled-components/native'

type StyledContainerProps = {
  status?: 'success' | 'failure'
}

export const Container = styled.View<StyledContainerProps>`
  flex: 1;

  ${({ theme, status }) =>
    !status &&
    css`
      background: ${theme.COLORS.WHITE};
    `}

  ${({ theme, status }) =>
    status &&
    css`
      background: ${status === 'success'
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
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
