import { shallowMount } from '@vue/test-utils'
import VueVideoSection from '@/VueVideoSection.vue'

describe('VueVideoSection.vue', () => {
  it('Sets props correctly', async () => {
    let initialPropsData = {
      elementId: 'header-background-video',
      mobileBreakpoint: 992,
      desktopHeight: 550,
      mobileHeight: 450,
      playsinline: true,
      loop: true,
      autoplay: true,
      autobuffer: true,
      muted: true
    }

    const wrapper = shallowMount(VueVideoSection, {
      propsData: {
        elementId: initialPropsData.elementId,
        mobileBreakpoint: initialPropsData.mobileBreakpoint,
        desktopHeight: initialPropsData.desktopHeight,
        mobileHeight: initialPropsData.mobileHeight,
        playsinline: initialPropsData.playsinline,
        loop: initialPropsData.loop,
        autoplay: initialPropsData.autoplay,
        autobuffer: initialPropsData.autobuffer,
        muted: initialPropsData.muted
      }
    })

    expect(wrapper.vm.elementId).toBe(initialPropsData.elementId)
    expect(wrapper.vm.mobileBreakpoint).toBe(initialPropsData.mobileBreakpoint)
    expect(wrapper.vm.desktopHeight).toBe(initialPropsData.desktopHeight)
    expect(wrapper.vm.mobileHeight).toBe(initialPropsData.mobileHeight)
    expect(wrapper.vm.playsinline).toBe(initialPropsData.playsinline)
    expect(wrapper.vm.loop).toBe(initialPropsData.loop)
    expect(wrapper.vm.autoplay).toBe(initialPropsData.autoplay)
    expect(wrapper.vm.autobuffer).toBe(initialPropsData.autobuffer)
    expect(wrapper.vm.muted).toBe(initialPropsData.muted)
  })
})