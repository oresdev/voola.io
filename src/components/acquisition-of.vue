<template>
  <section class="grid">
    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Frame-10692675.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Frame-10692675@2x.png" />
        <img src="../assets/images/Frame-10692675@2x.png" alt="" />
      </picture>
    </div>

    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p v-html="t('description')" />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: 'NFT的收购',
      description:
        'NFT 是一种独特的加密货币，一种新的在线支付方式。 支付和付款既可以在日常生活中进行，也可以在网上商店进行。 我们有机会在没有支付网站的情况下生成电子支付链接，将加密货币作为一种成熟的支付手段进行转移。 NFT 货币是“代币”，每一个都是独一无二的，不可替代的，这就赋予了对给定对象的权限。',
    },
    'en-US': {
      title: 'Acquisition of <b>NFT</b>',
      description:
        'Stable NFT tokens are called stable NFT coins because they provide price stability as they are pegged to a fiat currency. This offers traders, sellers and funds a low volatility solution when exiting positions in the market. All Stable NFT tokens are 1:1 pegged to their respective fiat currency (e.g. $1T = $1) and are 100% backed by reserves. As a fully transparent company, we publish a report on current reserve assets. <br /><br />The payment process using this virtual currency takes place in several stages. First, you need to enter the data from "Voola Wallet". After that, the money is debited from the buyer`s account, and a payment receipt is sent to the email. If the payment on the website is in automatic mode, the order status changes to "Paid".',
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
  margin: 8rem auto;

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
    margin: 0 auto;
    text-align: center;

    &__item {
      &:last-child {
        order: -1;
      }
    }
  }
}
</style>
