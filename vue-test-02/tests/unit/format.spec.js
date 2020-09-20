import { shallowMount, createLocalVue } from '@vue/test-utils'
import FilterTest from '@/views/Home.vue'
import { format } from 'url'

const localVue = createLocalVue()

describe('filter test', () =>{
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(FilterTest, {localVue})
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('show test', () => {
    const formatP = wrapper.find('.format')
    const nofamatP = wrapper.find('.noformat')
    expect(formatP.isVisible()).toBe(true)
    expect(nofamatP.isVisible()).toBe(false)
  })

  it('filter test', () => {
    expect(FilterTest.filters.formatterText('12345678')).toBe('12...78')
    expect(FilterTest.filters.formatterText('123456')).toBe('123456')
    expect(FilterTest.filters.formatterText('')).toBe('')
  })
})