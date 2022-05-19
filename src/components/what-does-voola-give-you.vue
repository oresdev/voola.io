<template>
  <section>
    <h2 v-html="t('title')" />

    <div class="grid">
      <article>
        <i class="icon-lock"></i>
        <h3 v-html="t('description[0]')" />
        <p v-html="t('content[0]')" />
      </article>

      <article>
        <i class="icon-wallet"></i>
        <h3 v-html="t('description[1]')" />
        <p v-html="t('content[2]')" />
      </article>

      <article>
        <i class="icon-password"></i>
        <h3 v-html="t('description[2]')" />
        <p v-html="t('content[2]')" />
      </article>

      <article>
        <i class="icon-swap"></i>
        <h3 v-html="t('description[3]')" />
        <p v-html="t('content[3]')" />
      </article>

      <article>
        <i class="icon-call"></i>
        <h3 v-html="t('description[4]')" />
        <p v-html="t('content[4]')" />
      </article>

      <article>
        <i class="icon-shield-done"></i>
        <h3 v-html="t('description[5]')" />
        <p v-html="t('content[5]')" />
      </article>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '<b>VOOLA</b> 给您带来什么？',
      description: ['规避加密货币禁令', '购买/出售加密货币', '有收益的加密货币存款', '加密货币交易', '移动应用', '安全可靠保护您的资金'],
      content: [
        '我们钱包的功能使您可以规避买卖加密货币的禁令',
        '只需点击几下，您就可以购买比特币或任何其他加密货币',
        '以盈利的方式投资您的加密货币',
        '24/7  随时随地 24/7',
        '只有您可以访问自己的钱包',
        '我们的加密钱包为防止欺诈提供可靠的保护',
      ],
    },
    'en-US': {
      title: 'What does <b>VOOLA</b> give you?',
      description: [
        'Bypass cryptocurrency ban',
        'Buy/Sell cryptocurrency',
        'Favorable deposit in crypto',
        'Cryptocurrency exchange',
        'Mobile App',
        'Reliable protection of your funds',
      ],
      content: [
        'The functionality allows you to bypass the ban on buy and sell cryptocurrencies',
        'Just a few clicks, you can buy Bitcoin or any other crypto coins',
        'Invest your cryptocurrency at a favorable interest',
        'Anytime and anywhere 24/7',
        'Only you have access to your wallet',
        'Our crypto wallet provides reliable protection against fraudsters',
      ],
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  background: url('@/assets/images/favicon.svg') no-repeat 100% 60%;
  background-size: 600px;
  margin: auto;
  max-width: var(--scheme-max-width);
  padding: 4rem;

  .grid {
    display: grid;
    gap: var(--scheme-gap);
    grid-template-columns: repeat(3, 1fr);

    article {
      background: hsla(0, 0%, 100%, 0.9);
      box-shadow: 0px 4px 4px hsla(0, 0%, 0%, 0.01), 0px 8px 18px hsla(0, 0%, 0%, 0.02);
      border-radius: 28px;
      padding: 2rem;

      h3 {
        margin: 1rem 0;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .grid {
      gap: calc(var(--scheme-gap) / 2);
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (max-width: 428px) {
    text-align: center;

    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
</style>
