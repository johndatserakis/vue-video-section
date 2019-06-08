<template>
  <div class="vue-video-section-wrapper" :style="{'height': currentHeight + 'px'}">
    <div class="vue-video-section">
      <div class="vue-video-section__overlay-content-wrapper">
        <div class="vue-video-section__overlay-content-wrapper__background"></div>
        <div class="vue-video-section__overlay-content-wrapper__content-wrapper">
          <div class="vue-video-section__overlay-content-wrapper__content-wrapper__content">
            <slot name="overlay-content"></slot>
          </div>
        </div>
      </div>

      <video
        :id="elementId"
        :ref="elementId"
        class="vue-video-section__video-element"
        :poster="posterSource"
        :playsinline="playsinline"
        :loop="loop"
        :autoplay="autoplay"
        :autobuffer="autobuffer"
        :muted="muted"
        :controls="controls"
      >
      <source v-if="mp4Source" :src="mp4Source" type="video/mp4" />
      <source v-if="oggSource" :src="oggSource" type="video/ogg" />
      <source v-if="webmSource" :src="webmSource" type="video/webm" />
      Sorry, your browser does not support the video tag. Please try upgrading your browser and load the page again.
    </video>
  </div>
</div>
</template>

<script>
import VueScreenSize from 'vue-screen-size'

export default {
  name: 'vue-video-section',
  mixins: [VueScreenSize.VueScreenSizeMixin],
  props: {
    elementId: {
      type: String,
      required: true
    },
    mp4Source: {
      type: String,
      required: false
    },
    oggSource: {
      type: String,
      required: false
    },
    webmSource: {
      type: String,
      required: false
    },
    posterSource: {
      type: String,
      required: false
    },
    mobileBreakpoint: {
      type: Number,
      required: false,
      default: 992
    },
    desktopHeight: {
      type: Number,
      required: false,
      default: 500
    },
    mobileHeight: {
      type: Number,
      required: false,
      default: 450
    },

    // Options
    playsinline: {
      type: Boolean,
      required: false,
      default: true
    },
    loop: {
      type: Boolean,
      required: false,
      default: true
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true
    },
    autobuffer: {
      type: Boolean,
      required: false,
      default: true
    },
    muted: {
      type: Boolean,
      required: false,
      default: true
    },
    controls: {
      type: Boolean,
      required: false,
      default: false
    },
  },
  data () {
    return {
    }
  },
  computed: {
    currentHeight() {
      if (this.$vssWidth > this.mobileBreakpoint) {
        return this.desktopHeight
      }
      return this.mobileHeight
    }
  },
  methods: {
    async playVideo() {
      try {
        return await this.$refs[this.elementId].play()
      } catch (error) {
        return Promise.reject(error)
      }
    },
    pauseVideo() {
      this.$refs[this.elementId].pause()
    }
  }
}
</script>

<style lang="scss">
.vue-video-section-wrapper {
  background: #fff;
  overflow: hidden;
  width: 100%;

  // For centering
  position: relative;
}

.vue-video-section {
  height: 100%;

  video[poster] {
    object-fit: cover;
  }

  &__video-element {
    // Great css solution
    // https://stackoverflow.com/a/29997746/8014660

    // Put it right below the overlay content
    z-index: 999;

    // Base
    height: 100%;
    width: 177.77777778vh; /* 100 * 16 / 9 */
    min-width: 100%;
    min-height: 56.25vw; /* 100 * 9 / 16 */

    // For centering
    position: absolute;
    left: 50%; /* % of surrounding element */
    top: 50%;
    transform: translate(-50%, -50%); /* % of current element */
  }

  &__overlay-content-wrapper {
    &__background {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;
      background: #000;
      opacity: 0.6;
    }

    &__content-wrapper {
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0px;
      left: 0px;
      z-index: 1000;

      &__content {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>