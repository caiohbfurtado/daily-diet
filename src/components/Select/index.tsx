import React, { useMemo } from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: 'Sim' | 'Não'
  selected: boolean
  mr?: boolean
}

export function Select({ selected, title, mr = false, ...rest }: Props) {
  const isPositive = useMemo(() => title === 'Sim', [title])
  return (
    <S.Container
      activeOpacity={0.5}
      isPositive={isPositive}
      selected={selected}
      mr={mr}
      {...rest}
    >
      <S.Circle isPositive={isPositive} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
