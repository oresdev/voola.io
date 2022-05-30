<template>
  <section>
    <h2 v-html="t('title')" />

    <p v-html="t('description')" />

    <figure>
      <a :href="t('link')" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <path fill="var(--scheme-v3)" d="M24 4a20 20 0 1 0 0 40 20 20 0 1 0 0-40z" />
          <path
            fill="var(--scheme-v2)"
            d="m33.95 15-3.746 19.126s-.161.874-1.245.874c-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355S10 24.375 10 23.625c0-.625.933-.923.933-.923l21.316-8.468c-.001-.001.651-.235 1.126-.234.292 0 .625.125.625.5 0 .25-.05.5-.05.5z"
          />
          <path fill="#b0bec5" d="m23 30.505-3.426 3.374s-.149.115-.348.12a.494.494 0 0 1-.219-.043l.964-5.965L23 30.505z" />
          <path fill="#cfd8dc" d="M29.897 18.196a.5.5 0 0 0-.701-.093L16 26s2.106 5.892 2.427 6.912c.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096a.499.499 0 0 0 .094-.7z" />
        </svg>
      </a>
    </figure>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '请继续关注我们的更新。',
      description: '如果你能支持我们并订阅我们的Telegram频道，我们将非常感激。',
      link: '//t.me/voola_CN',
    },
    'en-US': {
      title: 'Stay tuned <br /> for <b>our updates</b>.',
      description: 'We would be grateful if you would support us and subscribe to our Telegram channels.',
      link: '//t.me/voola_EU',
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  margin: 8em auto;
  text-align: center;

  figure {
    height: 100px;
    margin: 3em auto;
    width: 100px;

    svg {
      max-width: 80px;
      animation-duration: 1s;
      animation-fill-mode: both;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;

      &:hover {
        animation-name: bounce;
      }
    }
  }
}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-30px);
    -ms-transform: translateY(-30px);
    transform: translateY(-30px);
  }
  60% {
    -webkit-transform: translateY(-15px);
    -ms-transform: translateY(-15px);
    transform: translateY(-15px);
  }
}
</style>
