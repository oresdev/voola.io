<template>
  <section class="grid">
    <div class="grid__item">
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="200" height="59.83">
          <path
            fill="var(--scheme-v3)"
            d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09s-6.82-17.91 0-24.73c6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
          />
        </svg>
      </figure>

      <h1 v-html="t('title')" />

      <p v-html="t('description')" />

      <button v-text="t('button')" v-scroll-to="'#steps'" />
    </div>

    <div class="grid__item">
      <picture>
        <source media="(max-width: 768px)" srcset="../assets/images/Frame-10692682.png" />
        <source media="(min-width: 769px)" srcset="../assets/images/Frame-110@2x.png" />
        <img src="../assets/images/Frame-110@2x.png" alt="" />
      </picture>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: 'VOOLA 是最安全的加密钱包之一',
      description: '购买、收集、存储、交换加密货币和 NFT。通过加入VOOLA项目，您成为全球加密项目的一员。',
      button: '创建钱包',
    },
    'en-US': {
      title: 'VOOLA is the one of the most <br />secure <b>crypto wallets</b>',
      description:
        'Purchase, collection, storage, exchange of cryptocurrencies <br />and NFTs. By joining the VOOLA project, you become <br />a member of the global crypto project.',
      button: 'Create Wallet',
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 1fr;

  &__item {
    align-self: center;
    padding: 4em 0;

    &:last-child {
      margin: 0 0 auto;
      padding: 0;
    }
  }
}

@media only screen and (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0;

    &__item {
      padding: 4em 2rem;

      &:last-child {
        margin: 0 0 auto;
        padding: 0;
      }
    }
  }
}
</style>
