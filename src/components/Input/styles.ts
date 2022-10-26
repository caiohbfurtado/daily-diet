import styled, { css } from 'styled-components/native'

type StyledInputProps = {
  focused: boolean
  multiline: boolean
}

export const Container = styled.View`
  width: 100%;
  margin-bottom: 24px;
`

export const Input = styled.TextInput<StyledInputProps>`
  width: 100%;
  min-height: 48px;
  max-height: 48px;
  padding: 14px;

  ${({ theme }) => css`
    background: ${theme.COLORS.WHITE};
    border: 1px solid ${theme.COLORS.GRAY_5};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  ${({ theme, focused }) =>
    focused &&
    css`
      border-color: ${theme.COLORS.GRAY_3};
    `}

  ${({ multiline }) =>
    multiline &&
    css`
      min-height: 120px;
      max-height: 120px;
    `}
`
