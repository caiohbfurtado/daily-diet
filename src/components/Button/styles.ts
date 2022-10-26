import styled, { css } from 'styled-components/native'

type StyledButtonProps = {
  type: 'outline' | 'solid'
  full: boolean
  active: boolean
}

export const Container = styled.TouchableOpacity<StyledButtonProps>`
  min-height: 50px;
  max-height: 50px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  ${({ theme, type, full }) => css`
    background: ${type === 'solid' ? theme.COLORS.GRAY_2 : 'transparent'};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
    width: ${full ? '100%' : 'auto'};
  `}

  ${({ theme, active, type }) =>
    active &&
    css`
      background: ${type === 'solid'
        ? theme.COLORS.GRAY_1
        : theme.COLORS.GRAY_5};
    `}

    ${({ theme, type }) =>
    type === 'outline' &&
    css`
      border-width: 1px;
      border-color: ${theme.COLORS.GRAY_1};
    `}
`

export const ButtonTitle = styled.Text<Pick<StyledButtonProps, 'type'>>`
  ${({ theme, type }) => css`
    color: ${type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`
