import App from '@/App.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import axios from 'axios'
import { wrap } from 'module'

jest.mock('axios')

const localVue = createLocalVue()
localVue.prototype.$axios = axios

describe('axios test', () => {
  let wrapper;
  wrapper = shallowMount(App, {localVue})

  afterEach(() => {
    wrapper.destroy()
  })

  it('button click be called', () => {
    const mockFn = jest.fn()
    wrapper.setMethods({getData: mockFn})
    const axiosButton = wrapper.find('.axios')
    axiosButton.trigger('click')
    expect(mockFn).toBeCalled()
  })

  it('async getDate test', () => {
    wrapper = shallowMount(App, { localVue })
    const mockData = {
        data: {name : 'aa'}
    }
    axios.get.mockResolvedValue(mockData)
    return wrapper.vm.getData().then(result => {
        expect(result).toEqual(mockData)
        expect(wrapper.vm.info).toEqual(mockData.data)
    })
  })

  it('async getDate rejected test', () => {
    wrapper = shallowMount(App, { localValue })
    axios.get.mockResolvedValue('error')
    return wrapper.vm.getData().catch(e => expect(e).toMatch('error'))
  })
})