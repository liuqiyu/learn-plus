import type { ButtonProps } from './button'

export const useButton = (props: ButtonProps) => {
  const _type = props.type
  const _size = props.size
  const _disabled = props.disabled

  return {
    _type,
    _size,
    _disabled
  }
}
