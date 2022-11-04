import styled, { css } from 'styled-components/native'

type StyledTitleProps = {
  status: 'success' | 'failure'
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Image = styled.Image`
  margin-bottom: 32px;
`
export const Title = styled.Text<StyledTitleProps>`
  margin-bottom: 8px;
  ${({ theme, status }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${status === 'success'
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `}
`

export const Text = styled.Text`
  margin-bottom: 40px;
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
`

export const BoldText = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`
