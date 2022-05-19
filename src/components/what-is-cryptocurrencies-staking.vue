<template>
  <section class="grid">
    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p v-html="t('description')" />
    </div>

    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Mask-group-1.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Mask-group-1@2x.png" />
        <img src="../assets/images/Mask-group-1@2x.png" alt="" />
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
      title: '什么是加密货币质押？',
      description:
        '所有区块链都有一个特点：所有交易都必须经过验证。权益证明 (PoS) 是一种机制，它有自己的几种验证变体，以及一些混合模型。 为简单起见，我们将其称为质押。 通过质押硬币，您有机会投票并赚取收入。 这类似于您因将钱存入银行账户或将其提供给银行进行投资而获得利息。 该系统假设有保证的收入和可预测的收入来源。',
    },
    'en-US': {
      title: 'What is cryptocurrencies <b>staking</b>?',
      description:
        'All blockchains have one feature: all transactions must be verified. Proof-of-Stake (PoS) is one of the mechanisms that has several verification variations of its own, as well as some hybrid models. For simplicity, we will call this staking. By staking coins, you get the opportunity to vote and earn income. This is similar to if you receive interest for keeping money in a bank account or providing it to a bank for investment. This system assumes a guaranteed income and a predictable source of income.',
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
        max-width: 500px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 4rem auto;
    text-align: center;

    &__item {
      picture {
        display: none;
      }
    }
  }
}
</style>
