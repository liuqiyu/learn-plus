<template>
  <ul :class="ulClasses">
    <slot></slot>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useNamespace } from '@lyr-plus/hooks'

defineOptions({
  name: 'LyrUl'
})

const ns = useNamespace('ul')
const ulClasses = computed(() => {
  return [ns.b()]
})
</script>
