import type { ComponentSize } from '@lyr-plus/constants'
import type { MaybeRef } from '@lyr-plus/utils'
import { useProp } from './../use-prop'
import { computed, unref } from 'vue'

export const useSize = (fallback?: MaybeRef<ComponentSize | undefined>) => {
  const size = useProp<ComponentSize>('size')
  return computed((): ComponentSize => {
    return size.value || unref(fallback) || ''
  })
}
