<template>
  <section class="grid">
    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p v-html="t('description[0]')" />
    </div>

    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Group-108.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Group-108@2x.png" />
        <img src="../assets/images/Group-108@2x.png" alt="" />
      </picture>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '什么是稳定的 <b>NFT 代币以及它们如何工作</b>？',
      description: [
        '稳定的 NFT 代币被称为稳定的 NFT 代币，因为它们与法定货币挂钩，提供价格稳定性。 这为交易者、卖家和基金在退出市场头寸时提供了一种低波动性的解决方案。 所有稳定的 NFT 代币都与各自的法定货币 1:1 挂钩（例如 1₮ = 1 美元），并且 100% 由储备金支持。 作为一家公开透明的公司，我们发布了一份关于当前储备资产的报告。',
      ],
    },
    'en-US': {
      title: 'Where to <b>store NFT</b>',
      description: [
        'VOOLA provides an easy and secure way to store all your Ethereum and BSC crypto collectibles. Your crypto-currency collectibles are securely secured on the blockchain and linked to a public address.',
      ],
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

  @media only screen and (max-width: 768px) {
    gap: calc(var(--scheme-gap) / 2);
    grid-template-columns: repeat(1, 1fr);
    margin: 2rem auto;
    text-align: center;

    &__item {
      &:last-child {
        order: -1;
      }
    }
  }
}
</style>
