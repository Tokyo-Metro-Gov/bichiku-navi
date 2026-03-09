<template>
  <footer class="GlobalFooter">
    <div
      tabindex="0"
      v-show="showGoToTopBtn"
      class="GlobalFooter__pageTopButton _showTopBtn _hideMobileTopBtn"
      @focus="imageChange()"
      @blur="imageReturn()"
      @click="scrollTop"
      @keydown.enter="scrollTop"
    >
      <img @mouseover="imageChange()" @mouseleave="imageReturn()" :src="topButton" alt="繝壹・繧ｸ縺ｮ蜈磯ｭ縺ｸ謌ｻ繧九・繧ｿ繝ｳ" />
    </div>
    <div
      tabindex="0"
      v-show="showGoToTopBtn"
      class="GlobalFooter__pageTopButton_Mobile _hideTopBtn _showMobileTopBtn"
      @click="scrollTop"
    >
      <img :src="topButtonMobile" alt="繝壹・繧ｸ縺ｮ蜈磯ｭ縺ｸ謌ｻ繧九・繧ｿ繝ｳ・医せ繝槭・逕ｨ・・ />
    </div>
    <div class="GlobalFooter__pageTop">
      <div class="Container -xl">
        <div class="GlobalFooter__pageTopInner">
          <div class="GlobalFooter__pageTopImg">
            <img
              class="_show _hideMobile"
              src="~/assets/images/common/footer/dammy08.png"
              srcset="
                ~/assets/images/common/footer/dammy08.png    1x,
                ~/assets/images/common/footer/dammy08@2x.png 2x
              "
              alt=""
              width="827"
              height="119"
            />

            <img
              class="_hide _showMobile"
              src="~/assets/images/common/footer/dammy09.png"
              srcset="~/assets/images/common/footer/dammy09.png 1x, ~/assets/images/common/footer/dammy09@2x.png 2x"
              alt=""
              width="96"
              height="100"
            />
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'GlobalFooter',

  data: function () {
    return {
      showGoToTopBtn: false,
      topButton: require('~/assets/images/common/footer/dammy05.png'),
      topButtonMobile: require('~/assets/images/common/footer/dammy07.png')
    }
  },

  mounted: function () {
    window.addEventListener('scroll', () => (this.showGoToTopBtn = window.pageYOffset > 200))
  },

  methods: {
    scrollTop: function () {
      let userAgent = window.navigator.userAgent.toLowerCase()
      if (!(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1)) {
        document.activeElement.blur()
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },

    imageChange: function () {
      this.topButton = require('~/assets/images/common/footer/dammy06.png')
    },
    imageReturn: function () {
      this.topButton = require('~/assets/images/common/footer/dammy05.png')
    }
  }
}
</script>

