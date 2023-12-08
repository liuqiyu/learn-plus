import type { App } from 'vue'
import Button from './button'
import Ul from './ul'
import { provideGlobalConfig } from '@lyr-plus/hooks'

export * from './components'

export const components = [Button, Ul.Ul, Ul.Li]

export default {
  install(app: App, options?: any) {
    components.map((item) => {
      app.component(item.name, item)
    })

    provideGlobalConfig(options, app, true)
  }
}
