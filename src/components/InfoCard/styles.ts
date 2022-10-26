import styled, { css } from 'styled-components/native'

type StyledContainerProps = {
  backgroundColor: string
}

export const Container = styled.View<StyledContainerProps>`
  width: 100%;
  padding: 16px;
  margin-bottom: 12px;
  align-items: center;
  justify-content: center;

  ${({ theme, backgroundColor }) => css`
    border-radius: ${theme.BORDER_RADIUS.MD}px;
    background-color: ${backgroundColor};
  `}
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
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`
