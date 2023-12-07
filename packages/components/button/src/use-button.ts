import { ref, type SetupContext } from 'vue'
import type { ButtonProps, ButtonEmits } from './button'

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  const _type = props.type
  const _size = props.size
  const _disabled = props.disabled
  const _ref = ref<HTMLButtonElement>()

  function handleClick(evt: MouseEvent) {
    emit('click', evt)
  }

  return {
    _ref,
    _type,
    _size,
    _disabled,
    handleClick
  }
}
