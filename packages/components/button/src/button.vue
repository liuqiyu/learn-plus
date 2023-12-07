<template>
  <button
    ref="_ref"
    :class="[ns.b(), ns.m(_type), ns.m(_size), ns.is('disabled', _disabled)]"
    :disabled="_disabled"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useNamespace } from '@lyr-plus/hooks'
import { type ButtonProps, buttonEmits } from './button'
import { useButton } from './use-button'

defineOptions({
  name: 'LyrButton'
})

const props = defineProps<ButtonProps>()
const emit = defineEmits(buttonEmits)
const ns = useNamespace('button')
const { _ref, _size, _disabled, _type, handleClick } = useButton(props, emit)

defineExpose({
  ref: _ref,
  size: _size
})
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

  &.is-disabled {
    color: var(--el-button-disabled-text-color);
    cursor: not-allowed;
    background-image: none;
    background-color: var(--el-button-disabled-bg-color);
    border-color: var(--el-button-disabled-border-color);
  }
}
</style>
