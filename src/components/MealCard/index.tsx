import React from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: string
  hour: string
  status: 'open' | 'out'
}

export function MealCard({ title, status, hour, ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Hour>{hour}</S.Hour>
      <S.Divider />
      <S.Title numberOfLines={1}>{title}</S.Title>
      <S.StatusCircle status={status} />
    </S.Container>
  )
}
