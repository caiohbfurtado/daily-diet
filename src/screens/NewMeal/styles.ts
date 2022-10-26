import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.COLORS.GRAY_5};
  padding-top: 36px;
`

export const Header = styled.View`
  padding: 30px 24px 24px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 27px;
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
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

export const Form = styled.ScrollView.attrs({
  alwaysBounceVertical: false,
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`

export const Label = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_2};
  `}
`
