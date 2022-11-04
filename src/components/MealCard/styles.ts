import styled, { css } from 'styled-components/native'

type StyledStatusCircle = {
  status: 'success' | 'failure'
}

export const Container = styled.TouchableOpacity`
  min-height: 50px;
  max-height: 50px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  margin-bottom: 8px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_5};
    border-radius: ${theme.BORDER_RADIUS.SM}px;
  `}
`

export const Divider = styled.View`
  width: 1px;
  margin: 0 12px;
  height: 14px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const Title = styled.Text`
  flex: 1;
  padding-right: 18px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`

export const StatusCircle = styled.View<StyledStatusCircle>`
  width: 14px;
  height: 14px;
  border-radius: 999999px;
  background: ${({ theme, status }) =>
    status === 'success' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
