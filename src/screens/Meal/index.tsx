import { Header } from '@components/Header'
import { Label } from '@components/Label'
import { Badge } from '@components/Badge'

import * as S from './styles'
import { Button } from '../../components/Button'

export function Meal() {
  return (
    <S.Container>
      <Header title="Refeição" />

      <S.Content>
        <S.Infos>
          <S.Title>Sanduíche</S.Title>
          <S.Text>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </S.Text>

          <Label title="Data e hora" />
          <S.Text>12/08/2022 às 16:00</S.Text>

          <Badge status="failure" />
        </S.Infos>

        <Button title="Editar refeição" icon="edit" />
        <Button
          title="Excluir refeição"
          icon="delete"
          type="outline"
          style={{ marginTop: 8 }}
        />
      </S.Content>
    </S.Container>
  )
}
