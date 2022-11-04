import * as S from './styles'

type Props = {
  title: string
}

export function SectionHeader({ title }: Props) {
  return <S.Title>{title}</S.Title>
}
