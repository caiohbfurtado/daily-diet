import { createElement, useState } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

import * as S from './styles'
import { useTheme } from 'styled-components'

type Props = TouchableOpacityProps & {
  type?: 'outline' | 'solid'
  full?: boolean
  title: string
  icon?: 'add' | 'edit' | 'delete'
}

const iconRef = {
  add: Plus,
  edit: PencilSimpleLine,
  delete: Trash,
}

export function Button({
  type = 'solid',
  full = false,
  icon,
  title,
  ...rest
}: Props) {
  const theme = useTheme()
  const [isActive, setIsActive] = useState(false)

  function renderIcon(icon: keyof typeof iconRef) {
    return createElement(iconRef[icon], {
      size: 18,
      color: type === 'solid' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
      style: { marginRight: 12 },
    })
  }

  return (
    <S.Container
      onPressIn={() => setIsActive(true)}
      onPressOut={() => setIsActive(false)}
      active={isActive}
      type={type}
      full={full}
      {...rest}
    >
      {icon && renderIcon(icon)}
      <S.ButtonTitle type={type}>{title}</S.ButtonTitle>
    </S.Container>
  )
}
