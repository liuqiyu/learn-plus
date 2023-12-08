export const componentSizes = ['', 'default', 'small', 'large'] as const

export type ComponentSize = (typeof componentSizes)[number]

export const componentSizemap = {
  large: 40,
  defaultL: 32,
  small: 24
} as const
