import { describe, expect, it, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('Button.vue', () => {
  it('size', () => {
    const wrapper = mount(() => <Button size="large" />)

    expect(wrapper.classes()).toContain('lyr-button--large')
  })

  it('type', () => {
    const wrapper = mount(() => <Button type="primary" />)

    expect(wrapper.classes()).toContain('lyr-button--primary')
  })

  it('disabled', () => {
    const wrapper = mount(() => <Button disabled />)

    expect(wrapper.classes()).toContain('is-disabled')
  })
})
