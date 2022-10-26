import styled, { css } from 'styled-components/native'

type StyledContainerProps = {
  mr: boolean
  selected: boolean
  isPositive: boolean
}

type StyledCircleProps = Pick<StyledContainerProps, 'isPositive'>

export const Container = styled.TouchableOpacity<StyledContainerProps>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
  `}

  ${({ mr }) =>
    mr &&
    css`
      margin-right: 8px;
    `}

    ${({ theme, selected, isPositive }) =>
    selected &&
    css`
      border-width: 1px;
      border-style: solid;
      border-color: ${isPositive
        ? theme.COLORS.GREEN_DARK
        : theme.COLORS.RED_DARK};
      background-color: ${isPositive
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT};
    `}
`

export const Circle = styled.View<StyledCircleProps>`
  height: 8px;
  width: 8px;
  border-radius: 9999px;
  background-color: ${({ theme, isPositive }) =>
    isPositive ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`
