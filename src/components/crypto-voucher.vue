<template>
  <section class="grid">
    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p v-html="t('description[0]')" />

      <ul>
        <li>
          <i class="icon-ticket-star"></i>
          {{ t('description[1]') }}
        </li>

        <li>
          <i class="icon-call"></i>
          {{ t('description[2]') }}
        </li>
      </ul>

      <p v-html="t('description[3]')" />
    </div>

    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Image.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Image@2x.png" />
        <img src="../assets/images/Image@2x.png" alt="" />
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
      title: '加密凭证',
      description: [
        '是一种支付系统，可让您轻松购买加密货币。 购买 Voucher`a 的多种方式使该平台可供许多国家的公民使用。 提供以下方法购买优惠券：',
        '在公共场所的终端购买Voucher。',
        '通过Voola Wallet移动应用程序购买凭证',
        '与使用银行卡付款相比，Crypto Voucher 将节省您的时间。 该支付系统提供了购买加密货币的最便宜方式，保证了可靠性和安全性。 无论您如何购买 Crypto Voucher，您都可以在瞬间购买、兑换和交易加密货币！',
      ],
    },
    'en-US': {
      title: 'Crypto <b>Voucher</b>',
      description: [
        '"Crypto Voucher" is a payment system that simplifies the possibility of buying cryptocurrencies. A huge number of ways to purchase a Voucher makes the platform accessible to citizens of many countries. The following methods are offered for buying a Voucher:',
        'Purchase of a Voucher in terminals located in public places',
        'Purchase of a Voucher, through the mobile application "Voola Wallet"',
        'Crypto Voucher will save you time rather than paying with bank cards. This payment system offers the cheapest way to buy cryptocurrencies, guaranteeing reliability and security. No matter how you bought Crypto Voucher, you can buy, exchange and make transactions with cryptocurrency in an instant!',
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
  margin: 8rem auto;

  &__item {
    align-self: center;

    picture {
      img {
        max-width: 500px;
      }
    }

    ul {
      li {
        align-items: center;
        display: flex;
        font-weight: 400;
        margin: 2rem 0;
        max-width: 400px;

        i {
          background-color: var(--scheme-v3);
          border-radius: 50px;
          color: var(--scheme-v2);
          margin: 0 20px 0 0;
          padding: 1rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;

    ul {
      li {
        flex-direction: column;
        margin: 2rem auto;

        i {
          margin: 0 auto 2rem;
        }
      }
    }
  }
}
</style>
