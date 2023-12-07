export const buttonTypes = ['default', 'primary', 'success', 'warning', 'info', 'danger'] as const

export interface ButtonProps {
  size?: string
  type?: string
  disabled?: boolean
}

export const buttonEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits
