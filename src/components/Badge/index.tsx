import { useMemo } from 'react'
import { StatusCircle } from '../StatusCircle'

import * as S from './styles'

type Props = {
  status: 'success' | 'failure'
}

const badgeTextObj = {
  success: 'dentro',
  failure: 'fora',
}

export function Badge({ status }: Props) {
  const badgeText = useMemo(() => `${badgeTextObj[status]} da dieta`, [status])

  return (
    <S.Container>
      <StatusCircle status={status} />
      <S.BadgeText>{badgeText}</S.BadgeText>
    </S.Container>
  )
}
