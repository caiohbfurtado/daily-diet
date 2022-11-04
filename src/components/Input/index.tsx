import { RefObject, useMemo, useRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { Mask, Masks, useMaskedInputProps } from 'react-native-mask-input'

import { Label } from '@components/Label'

import * as S from './styles'

type Props = TextInputProps & {
  label: string
  multiline?: boolean
  formatType?: 'date' | 'hour'
  inputRef?: RefObject<TextInput>
}

export function Input({
  label,
  value = '',
  multiline = false,
  formatType,
  onChangeText,
  inputRef,
  ...rest
}: Props) {
  const [focused, setFocused] = useState(false)

  const timeMask: Mask = (text = '') => {
    const cleanTime = text.replace(/\D+/g, '')

    const hourFirstDigit = /[012]/
    let hourSecondDigit = /\d/

    if (cleanTime.charAt(0) === '2') {
      hourSecondDigit = /[0123]/
    }

    const minuteFirstDigit = /[012345]/
    const minuteSecondDigit = /\d/

    return [
      hourFirstDigit,
      hourSecondDigit,
      ':',
      minuteFirstDigit,
      minuteSecondDigit,
    ]
  }

  const maskedInputProps = useMaskedInputProps({
    value,
    onChangeText,
    ...(formatType && {
      mask: formatType === 'date' ? Masks.DATE_DDMMYYYY : timeMask,
    }),
  })

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
      <Label title={label} />
      <S.Input
        ref={inputRef}
        focused={isFocused}
        onFocus={handleChangeFocus}
        onBlur={handleChangeFocus}
        multiline={multiline}
        {...maskedInputProps}
        {...rest}
      />
    </S.Container>
  )
}
