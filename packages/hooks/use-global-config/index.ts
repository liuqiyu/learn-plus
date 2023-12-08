import type { App } from 'vue'
import { computed, getCurrentInstance, provide, unref } from 'vue'
import { debugWarn } from '@lyr-plus/utils'

export const provideGlobalConfig = (config: any, app?: App, global = false) => {
  console.log(getCurrentInstance())
  const inSetup = !!getCurrentInstance()

  const provideFn = app?.provide ?? (inSetup ? provide : undefined)
  if (!provideFn) {
    debugWarn('provideGlobalConfig', 'provideGlobalConfig() can only be used inside setup().')
    return
  }

  const content = computed(() => {
    return unref(config)
  })

  return content
}
