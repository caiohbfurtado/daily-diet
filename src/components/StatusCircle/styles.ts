import styled from 'styled-components/native'

type StyledCircleProps = {
  status: 'success' | 'failure'
}

export const Circle = styled.View<StyledCircleProps>`
  height: 8px;
  width: 8px;
  background-color: ${({ theme, status }) =>
    status === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  margin-right: 8px;
  border-radius: 9999px;
`
