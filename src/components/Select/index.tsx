import React, { useMemo } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { StatusCircle } from '../StatusCircle'

import * as S from './styles'

type Props = TouchableOpacityProps & {
  title: 'Sim' | 'Não'
  selected: boolean
  mr?: boolean
}

export function Select({ selected, title, mr = false, ...rest }: Props) {
  const status = useMemo(
    () => (title === 'Sim' ? 'success' : 'failure'),
    [title],
  )
  return (
    <S.Container
      activeOpacity={0.5}
      status={status}
      selected={selected}
      mr={mr}
      {...rest}
    >
      <StatusCircle status={status} />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
