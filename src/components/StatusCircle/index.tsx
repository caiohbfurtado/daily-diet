import * as S from './styles'

type Props = {
  status: 'success' | 'failure'
}

export function StatusCircle({ status }: Props) {
  return <S.Circle status={status} />
}
