<template>
  <div id="app">
    <vue-video-section
      :elementId="'header-background-video'"
      :ref="'header-background-video'"
      :mp4Source="require('../src/assets/videos/big_buck_bunny.mp4')"
      :oggSource="require('../src/assets/videos/big_buck_bunny.ogv')"
      :webmSource="require('../src/assets/videos/big_buck_bunny.webm')"
      :posterSource="require('../src/assets/images/poster.png')"
      :mobileBreakpoint="992"
      :desktopHeight="550"
      :mobileHeight="450"
      :playsinline="true"
      :loop="true"
      :autoplay="true"
      :autobuffer="true"
      :muted="true"
    >
      <div slot="overlay-content" class="overlay-content">
        <div class="container py-4">
          <div class="row justify-content-center">
            <div class="col-lg-12 text-center">
              <h3><strong>vue-video-section</strong></h3>
            </div>
          </div>
        </div>
        <div class="container py-4">
          <div class="row justify-content-center mb-4">
            <div class="col-lg-6">
              <span class="badge badge-primary mb-1">install</span>
              <div class="code-text">npm i vue-video-section</div>
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="list-group">
                <a href="https://github.com/johndatserakis/vue-video-section" class="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                <a href="https://www.npmjs.com/package/vue-video-section" class="list-group-item list-group-item-action" target="_blank" rel="noopener noreferrer">View on NPM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </vue-video-section>

    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <!-- <button @click="playClicked">play</button>
          <button @click="pauseClicked">pause</button> -->
          <p><code>vue-video-section</code> is a simple video header/section component for Vue. It's great for headers or sections where you want a full-screen video or you want to overlay some content on a video.</p>
          <p>Check out <a href="https://github.com/johndatserakis/vue-video-section" target="_blank" rel="noopener noreferrer">the GitHub</a> page to see how you can use <code>vue-video-section</code> in your Vue projects.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {}
    },
    methods: {
      async playClicked() {
        try {
          await this.$refs['header-background-video'].playVideo()
        } catch (error) {
          console.log(error)
          console.log('There was an error playing the video.')
        }
      },
      async pauseClicked() {
        this.$refs['header-background-video'].pauseVideo()
      }
    }
  }
</script>

<style lang="scss">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');

html {
  width: 100%;
  font-size: 18px;
  color: #333;
}

body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.code-text {
  background: #eee;
  border: 1px solid #ddd;
  padding: 10px 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  text-align: center;
}

@media (min-width: 992px) {
  .code-text {
    margin-bottom: 0;
  }
}

.btn {
  text-transform: uppercase;
  font-weight: bold;
}

//
// vue-video-section customization below
//

.overlay-content {
  h3 {
    color: #fff;
  }
}
</style>
