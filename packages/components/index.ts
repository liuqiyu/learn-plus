import type { App } from 'vue'
import Button from './button'
export * from './components'

export const components = [Button]

export default {
  install(app: App) {
    components.map((item) => {
      app.component(item.name, item)
    })
  }
}
