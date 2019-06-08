<p align="center"><a href="https://johndatserakis.github.io/vue-video-section/" target="_blank" rel="noopener noreferrer"><img src="./src/assets/images/panel.png" width="250" style="max-height: 250px;" alt="vue-video-section"></a></p>

# vue-video-section

A simple video header/section component for Vue. Good for video backgrounds and overlaying content on them.

<p align="left">
  <a href="https://www.npmjs.com/package/vue-video-section"><img src="https://img.shields.io/npm/v/vue-video-section.svg" alt="NPM Version"></a>
  <a href="https://www.npmjs.com/package/vue-video-section"><img src="https://img.shields.io/npm/dm/vue-video-section.svg" alt="NPM Downloads"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjohndatserakis%2Fvue-video-section&text=Check%20out%20vue-video-section%20on%20GitHub&via=johndatserakis"><img src="https://img.shields.io/twitter/url/https/github.com/johndatserakis/vue-video-section.svg?style=social" alt="Tweet"></a>
</p>

### Links

[View demo](https://johndatserakis.github.io/vue-video-section/)

[View on npm](https://www.npmjs.com/package/vue-video-section)

[View on GitHub](https://github.com/johndatserakis/vue-video-section)

### Install

##### Download

```
# npm
npm i vue-video-section

# yarn
yarn add vue-video-section
```

Or you can include it through the browser at the bottom of your page along with the css:

```html
<!-- Please note if you're using the browser method you're going to want to adjust the version number as needed. The number given here is just an initial version. -->

<script src="https://unpkg.com/vue-video-section@1.0.0/dist/vue-video-section.min.js"></script>

<link rel="stylesheet" type="text/css" href="https://unpkg.com/vue-video-section@1.0.0/dist/vue-video-section.css">
```

##### Use

```html
<!-- css import for when you want to import the component css into your css file/files  -->
@import '/path/to/node_modules/vue-video-section/dist/vue-video-section.css';

OR

<!-- javascript import for when you're importing the css directly in your javascript  -->
import 'vue-video-section/dist/vue-video-section.css'

THEN

import VueVideoSection from 'vue-video-section'
Vue.component('vue-video-section', VueVideoSection)
```

### About

`vue-video-section` is a simple Vue component that helps you use a video background as a background for a header or another section on your site.

One pain point `vue-video-section` hopes to solve is the overlaying of content on your background video. That can be tricky! `vue-video-section` uses a combination of techniques to make this as simple as possible while still having the video stay nice and centered with a proper aspect ratio. As you can see in the demo (code is in the `./example` folder), you can just fill the `overlay-content` slot with whatever you like - I'm using Bootstrap's grid with just some basic content. You sorta don't even have to think about it.

The only caveat is that you'll want to set a predefined height for the section where you'll be showing the video. If this can be circumvented later I'll add it to the library. Right now it's really simple though - just set the `desktopHeight`, `mobileHeight`, and `mobileBreakpoint` props and you'll be all set. You can even have it change real time if you like.

You'll notice I'm providing three different filetypes in this example - that's because to get the best browser support you'll want to include an `mp4`, `.ogv`, and `webm` file - although you'll probably get by with just an `.mp4` for the most part. If the browser doesn't support your video, make sure to have the `posterSource` prop provided as it will fall back to that image. If *that* doesn't work, then some text will be shown letting the user know their browser isn't supported.

### Usage Example

```html
<template>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita quam laboriosam iusto, sapiente, tempore eaque eos unde. Recusandae, officia perferendis tenetur in animi excepturi perspiciatis culpa amet quia voluptatibus tempora.</p>
          </div>
        </div>
      </div>
    </div>
  </vue-video-section>
</template>
```

### Notes

Use the `playsinline` prop to control whether the video plays on mobile. If you set it to false then it will just show its `posterSource` image. Keep in mind that browsers are always changing their reaction to some of these properties so it might be a bit of a mixed bag concerning options like these. Right now, *this* is the way to stop the playing in mobile, but that may change in the future.

### Props

| prop | type | required | default | possible values | description |
|---|---|---|---|---|---|
| elementId | String | yes | | | This value will be set as the `id` of the instance |
| ref | String | no | | | This value will be set as the `ref` of the instance |
| mp4Source | Video | no | | | `require()` your `.mp4` file |
| oggSource | Video | no | | | `require()` your `.ogv` file |
| webmSource | Video | no | | | `require()` your `.webm` file |
| posterSource | Image | no | | | `require()` your `image` file |
| mobileBreakpoint | Number | no | 992 | | The width breakpoint between what you consider mobile and desktop |
| desktopHeight | Number | no | 500 | | The height of the section in desktop |
| mobileHeight | Number | no | 450 | | The height of the section in mobile |
| playsinline | Boolean | no | true | | A Boolean attribute indicating that the video is to be played "inline", that is within the element's playback area |
| loop | Boolean | no | true | | Loop the video |
| autoplay | Boolean | no | true | | Autoplay the video |
| autobuffer | Boolean | no | true | | Autobuffer the video |
| muted | Boolean | no | true | | Start the video muted |

### Methods

| method | parameters | description |
|---|---|---|
| playVideo | | If you didn't autoplay the video, use this to start it |
| pauseVideo | | Pause the video |

Note - to call these methods set a `ref` on your `<vue-video-section />`, something like this: `<vue-video-section :ref="header-background-video" />`. Then, manually call the methods like this in your javascript: `this.$refs['header-background-video'].play()`.

### Slots

| name | description |
|---|---|
| overlay-content | Use this to provide custom content overlayed over your video. |

### SCSS Structure

```scss
.vue-video-section-wrapper {
}

.vue-video-section {
  video[poster] {
  }

  &__video-element {
  }

  &__overlay-content-wrapper {
    &__background {
    }

    &__content-wrapper {
      &__content {
      }
    }
  }
}
```
### Development

``` bash
# install dependencies
npm install

# serve with hot reload
npm run watch

# run the tests
npm run test

# build demo page
npm run build:example

# build library
npm run build:library

# build everything and run tests
npm run build
```

### Other

Go ahead and fork the project! Submit an issue if needed. Have fun!

If you use this in a project let me know and I'll make a list here linking to it.

### License

[MIT](http://opensource.org/licenses/MIT)

Packaged with a mixture of [vue-lib-template](https://github.com/biigpongsatorn/vue-lib-template) and [vue-sfc-rollup](https://github.com/team-innovation/vue-sfc-rollup).