import * as S from './styles'

type Props = {
  title: string
}

export function Label({ title }: Props) {
  return <S.Label>{title}</S.Label>
}
