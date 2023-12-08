import { ref, computed, type SetupContext } from 'vue'
import type { ButtonProps, ButtonEmits } from './button'
import { useSize } from '@lyr-plus/hooks'

export const useButton = (props: ButtonProps, emit: SetupContext<ButtonEmits>['emit']) => {
  const _type = computed(() => props.type)
  const _size = useSize()
  console.log(_size, 123)
  const _disabled = computed(() => props.disabled || false)
  const _ref = ref<HTMLButtonElement>()
  console.log()

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
