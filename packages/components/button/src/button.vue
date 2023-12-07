<template>
  <button :class="[ns.b(), ns.m(_type), ns.m(_size), ns.is('disabled', _disabled)]">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@lyr-plus/hooks'
import type { ButtonProps } from './button'
import { useButton } from './use-button'

defineOptions({
  name: 'LyrButton'
})

const props = defineProps<ButtonProps>()
console.log(props)

const ns = useNamespace('button')

const { _size, _disabled, _type } = useButton(props)
</script>

<style lang="scss" scoped>
.lyr-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
</style>
