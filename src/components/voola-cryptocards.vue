<template>
  <section class="grid">
    <h2 class="grid__title" v-html="t('title')" />

    <picture class="grid__picture">
      <source media="(max-width: 799px)" srcset="../assets/images/Group-1-1.png" />
      <source media="(min-width: 800px)" srcset="../assets/images/Group-1-1@2x.png" />
      <img src="../assets/images/Group-1-1@2x.png" alt="" />
    </picture>

    <div class="grid__item">
      <i class="icon-bag"></i>
      <h3 v-html="t('description[0]')" />

      <p v-html="t('content[0]')" />
    </div>

    <div class="grid__item second">
      <i class="icon-filter"></i>
      <h3 v-html="t('description[1]')" />

      <p v-html="t('content[1]')" />
    </div>

    <div class="grid__item third">
      <i class="icon-buy"></i>
      <h3 v-html="t('description[2]')" />

      <p v-html="t('content[2]')" />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '技术允许您',
      description: ['旅行', '技术允许您', '购物'],
      content: ['无国界使用VOOLA卡：加密货币与法币的自动转换。通过应用程序支付门票和酒店', 'VOOLA 卡可在支持万事达、维萨、银联的世界任何地方使用。', '购买时使用 ECU 卡'],
    },
    'en-US': {
      title: '<b>VOOLA</b> cryptocards',
      description: ['Travel', 'VOOLA technologes allow', 'Shopping'],
      content: [
        'Use of the VOOLA card without borders: automatic conversion of cryptocurrency and fiat. Payment for tickets and hotels through the Voola App, using by crypto, NFT stable coins and vouchers.',
        'Use of the VOOLA card is possible anywhere in the world where Mastercard, Visa, Union Pay are supported.',
        'Use of the VOOLA card when making purchases.',
      ],
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  h2 {
    grid-area: 1 / 1 / 2 / 4;
    margin: 4rem auto;
  }

  picture {
    grid-area: 2 / 1 / 5 / 4;

    img {
      max-width: 500px;
    }
  }

  &__item {
    grid-area: 2 / 3 / 3 / 4;
    position: relative;

    i {
      background-color: var(--scheme-v3);
      border-radius: 50px;
      color: var(--scheme-v2);
      left: -100px;
      padding: 1rem;
      position: absolute;
    }

    &.second {
      grid-area: 3 / 1 / 4 / 2;
      text-align: right;

      i {
        left: auto;
        right: -100px;
      }
    }

    &.third {
      grid-area: 4 / 3 / 5 / 4;
    }
  }

  @media only screen and (max-width: 768px) {
    gap: var(--scheme-gap);
    grid-template-columns: 1fr;
    text-align: center;

    h2 {
      grid-area: 1 / 1 / 2 / 4;
    }

    picture {
      grid-area: 2 / 1 / 5 / 4;
      opacity: 0.6;
    }

    &__item {
      grid-area: 2 / 1 / 3 / 4;
      text-align: center !important;

      i {
        display: inline-block;
        left: auto;
        margin: 0 auto 2rem;
        position: relative;
      }

      &.second {
        grid-area: 3 / 1 / 4 / 4;

        i {
          left: auto;
          right: auto;
        }
      }

      &.third {
        grid-area: 4 / 1 / 5 / 4;
      }
    }
  }

  @media only screen and (max-width: 428px) {
    h2 {
      margin: 0 auto;
    }

    picture {
      display: none;
    }
  }
}
</style>
