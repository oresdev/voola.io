<template>
  <section class="grid">
    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/[Mockup]-iPhone-24.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/[Mockup]-iPhone-24@2x.png" />
        <img src="../assets/images/[Mockup]-iPhone-24@2x.png" alt="" />
      </picture>
    </div>

    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p id="download" v-html="t('description')" />

      <a class="button" href="//vip.voola.vip/update/voola-90.apk" download v-text="t('button[0]')" />

      <h3 v-text="t('button[1]')" />

      <a href="#"><i class="social icon-apple"></i></a>
      <a href="#"><i class="social icon-googleplay"></i></a>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '钱包应用',
      description: '使用 VOOLA 在您的 Android 和 Apple 设备上安全地存储加密货币让您确信您的数字资产是安全的',
      button: ['下载应用程序', '即将推出'],
    },
    'en-US': {
      title: 'Wallet <b>App</b>',
      description: 'Securely store cryptocurrencies on your Android and Apple devices with VOOLA Gives you confidence that your digital assets are safe.',
      button: ['Download App', 'Our app will be available soon..'],
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  display: grid;
  gap: var(--scheme-gap);
  grid-template-columns: 1fr 1fr;

  &__item {
    align-self: center;

    picture {
      img {
        max-width: 400px;
      }
    }
  }

  h3 {
    margin: 1em 0 1em;
  }

  .button {
    margin: 3rem 0 1rem;
  }

  a {
    display: inline-block;
    margin: 0 40px 0 0;
  }

  i {
    color: #cecece;
  }

  @media only screen and (max-width: 768px) {
    gap: calc(var(--scheme-gap) / 2);
    grid-template-columns: repeat(1, 1fr);
    margin: 0 auto;
    text-align: center;

    a {
      margin: 10px 20px;
    }
  }
}
</style>
