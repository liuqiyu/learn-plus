<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { type ButtonInstance } from '@lyr-plus/components'

const button = ref<ButtonInstance>()

nextTick(() => {
  console.log(button.value, 123)
})

function handleClick(evt: MouseEvent) {
  console.log(evt)
}
</script>

<template>
  <main>123</main>
  <div>
    <LyrButton ref="button" type="primary" size="small" disabled @click="handleClick"
      >123</LyrButton
    >

    <LyrUl>
      <LyrLi>123</LyrLi>
      <LyrLi>123</LyrLi>
      <LyrLi>123</LyrLi>
      <LyrLi>123</LyrLi>
    </LyrUl>
  </div>
</template>
