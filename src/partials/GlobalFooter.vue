<i18n>
{
  "ja": {
    "pageTop": "ページの先頭へ戻る"
  },
  "en": {
    "pageTop": "Back to the top of page"
  }
}
</i18n>

<template>
  <footer class="GlobalFooter">
    
    <div tabindex="0" v-show="showGoToTopBtn" class="GlobalFooter__pageTopButton _showTopBtn _hideMobileTopBtn" @focus="imageChange()" @blur="imageReturn()" @click="scrollTop" @keydown.enter="scrollTop">
        <img
           @mouseover="imageChange()"
           @mouseleave="imageReturn()"
           :src="topButton"
           alt="ページの先頭へ戻るボタン"
        />
    </div>
    <div tabindex="0" v-show="showGoToTopBtn" class="GlobalFooter__pageTopButton_Mobile _hideTopBtn _showMobileTopBtn" @click="scrollTop">
        <img
           :src="topButtonMobile"
           alt="ページの先頭へ戻るボタン（スマホ用）"
        />
    </div>
    <div class="GlobalFooter__pageTop">
      <div class="Container -xl">
        <div class="GlobalFooter__pageTopInner">
          <div class="GlobalFooter__pageTopImg">
            <img
              class="_show _hideMobile"
              src="~/assets/images/common/footer/img-bousaikun.png"
              srcset="
                ~/assets/images/common/footer/img-bousaikun.png    1x,
                ~/assets/images/common/footer/img-bousaikun@2x.png 2x
              "
              alt=""
              width="827"
              height="119"
            />

            <img
              class="_hide _showMobile"
              src="~/assets/images/common/footer/sp-img-01.png"
              srcset="
                ~/assets/images/common/footer/sp-img-01.png    1x,
                ~/assets/images/common/footer/sp-img-01@2x.png 2x
              "
              alt=""
              width="96"
              height="100"
            />
          </div>
          
        </div>
      </div>
    </div>

    <aside class="GlobalFooter__banner">
      <ul class="GlobalFooter__bannerList">
        <li>
          <a
            href="https://www.bousai.metro.tokyo.lg.jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/common/footer/bnr-footer-01.png"
              width="225"
              height="50"
              alt="東京都防災ホームページ"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.bousai.metro.tokyo.lg.jp/kyojyo/1001855/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/common/footer/bnr-footer-02.png"
              width="167"
              height="50"
              alt="「都民の備蓄推進プロジェクト」11月19日は備蓄の日 ～1年に1度はびち(1)く(9)の確認～ 日常備蓄 少し多めに購入 食べる・使う"
            />
          </a>
        </li>

        <li>
          <a
            href="https://tigmedia.jp/watch?id=69ea6260195161bf7145"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/common/footer/bnr-footer-03.png"
              width="115"
              height="50"
              alt="日常備蓄だよ！貝社員 クイズ動画公開中"
            />
          </a>
        </li>

        <li>
          <a
            href="https://www.bousai.metro.tokyo.lg.jp/mytimeline/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/common/footer/bnr-footer-05.jpg"
              width="125"
              height="50"
              alt="東京マイ・タイムライン"
            />
          </a>
        </li>

        <li>
          <a
            href="https://twitter.com/tokyo_bousai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="~/assets/images/common/footer/bnr-footer-04.png"
              width="225"
              height="50"
              alt="防災ツイッター"
            />
          </a>
        </li>
      </ul>
    </aside>

    <div class="GlobalFooter__link">
      <ul class="GlobalFooter__linkList">
        <li>
          <nuxt-link :to="localePath($getPath('sitePolicy'))">
            {{ $getTitle('sitePolicy', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('i18nPolicy'))">
            {{ $getTitle('i18nPolicy', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('privacyPolicy'))">
            {{ $getTitle('privacyPolicy', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('copyright'))">
            {{ $getTitle('copyright', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('contact'))">
            {{ $getTitle('contact', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <nuxt-link :to="localePath($getPath('downLoad'))">
            {{ $getTitle('downLoad', $i18n.locale) }}
          </nuxt-link>
        </li>

        <li>
          <a :href="$getPath('form')" target="_blank" rel="noopener noreferrer">
            {{ $getTitle('form', $i18n.locale) }}
          </a>
        </li>
      </ul>
    </div>

    <div class="GlobalFooter__admin">
      <div>
        <span>{{ $admin[$i18n.locale] }}</span>
        <span
          >{{ $postalCode[$i18n.locale] }} {{ $address[$i18n.locale] }}</span
        >
      </div>

      <div>{{ $developper[$i18n.locale] }}</div>
      <div><a href=https://github.com/code4fukui/tokyobichikunavi>備蓄ナビ src on GitHub</a>, forked from <a href=https://www.bichiku.metro.tokyo.lg.jp/download/>東京備蓄ナビ オープンソース</a></div>
    </div>
    
  </footer>
</template>

<script>

export default {
  name: 'GlobalFooter',
  
  data: function() {
    return {
      showGoToTopBtn: false,
      topButton: require('~/assets/images/common/footer/img-GoToTop.png'),
      topButtonMobile: require('~/assets/images/common/footer/img-GoToTop-mobile.png'),
      
    }
  },
  
  mounted: function() {
    window.addEventListener('scroll', () => this.showGoToTopBtn = (window.pageYOffset > 200))
  },
  
  methods: {
    scrollTop: function(){
      let userAgent = window.navigator.userAgent.toLowerCase()
      if (!(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1)) {
        document.activeElement.blur()
      }
      window.scrollTo({top: 0, behavior: "smooth"})
    },
    
    imageChange: function(){
      this.topButton = require('~/assets/images/common/footer/img-GoToTop-2.png')
    },
    imageReturn: function(){
      this.topButton = require('~/assets/images/common/footer/img-GoToTop.png')
    }
  },
}
</script>
