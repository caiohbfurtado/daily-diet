import { useMemo, useRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import * as S from './styles'

type Props = TextInputProps & {
  label: string
  multiline?: boolean
}

export function Input({
  label,
  value = '',
  multiline = false,
  onChangeText,
  ...rest
}: Props) {
  const inputRef = useRef<TextInput>()
  const [focused, setFocused] = useState(false)

  function handleChangeFocus() {
    if (focused) {
      inputRef?.current?.blur()
      setFocused(false)
      return
    }

    setFocused(true)
    inputRef?.current?.focus()
  }

  const isFocused = useMemo(
    () => focused || value.trim().length > 0,
    [value, focused],
  )

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Input
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        focused={isFocused}
        onFocus={handleChangeFocus}
        onBlur={handleChangeFocus}
        multiline={multiline}
        {...rest}
      />
    </S.Container>
  )
}
