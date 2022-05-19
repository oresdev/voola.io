<template>
  <section>
    <h2 v-html="t('title')" />

    <p>
      <span v-html="t('description[0]')" />
    </p>

    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n' //Import and use

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: 'VOOLA 支持的资产和区块链',
      description: ['正在上市...'],
    },
    'en-US': {
      title: '<b>Assets and blockchains</b> <br />supported by VOOLA',
      description: ['Listing in progress ...'],
    },
  },
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
section {
  margin: 12rem auto;
  text-align: center;

  p {
    span {
      color: var(--scheme-v3);
      font-weight: 400;
    }
  }

  ul {
    background-color: var(--scheme-v4);
    border-radius: 50px;
    margin: 1rem 0;

    li {
      background: var(--scheme-v3);
      border-radius: 50px;
      padding: 20px;
      width: 60%;

      &:last-child {
        animation: blink 3s infinite both;
      }
    }
  }
}

@keyframes blink {
  0%,
  50%,
  100% {
    opacity: 1;
  }
  25%,
  75% {
    opacity: 0.6;
  }
}
</style>
