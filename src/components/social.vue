<template>
  <section>
    <h2 v-html="t('title')" />

    <p v-html="t('description')" />

    <div class="icons">
      <a href="//twitter.com/vooladmcc" target="_blank"><i class="social icon-twitter"></i></a>

      <a href="//www.instagram.com/vooladmcc" target="_blank"><i class="social icon-instagram"></i></a>

      <a :href="t('link')" target="_blank"><i class="social icon-telegram"></i></a>
    </div>
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

  .icons {
    display: flex;
    justify-content: space-evenly;

    margin: 6em auto;

    @media only screen and (max-width: 768px) {
      justify-content: space-between;
    }

    a {
      i {
        &:hover {
          color: var(--scheme-v4);
        }
      }
    }
  }
}
</style>
