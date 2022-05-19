<template>
  <section class="grid">
    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Phone.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Phone@2x.png" />
        <img src="../assets/images/Phone@2x.png" alt="" />
      </picture>
    </div>

    <div class="grid__item">
      <h2 v-html="t('title')" />

      <ul>
        <li>
          <i class="icon-download"></i>
          <a href="#" v-text="show ? t('description[3]') : t('description[0]')" v-on:click.prevent="show = true" />
        </li>

        <li>
          <i class="icon-wallet"></i>
          {{ t('description[1]') }}
        </li>

        <li>
          <i class="icon-tick-square"></i>
          {{ t('description[2]') }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n' //Import and use

const show = ref(false)

const { t } = useI18n({
  // Pass in the messages object with the text to be scheduled. "zh-CN" - Chinese, "en-US" - English, the key s of the two objects must be identical.
  messages: {
    'zh-CN': {
      title: '从哪里开始？只需简单的步骤!',
      description: ['下载钱包', '创建自己的钱包', '获取加密货币', '即将推出'],
    },
    'en-US': {
      title: 'Where to begin? With <b>simple steps!</b>',
      description: ['Download a wallet', 'Create your own wallet', 'Receive', 'Coming soon..'],
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
  margin: 4rem auto;

  &__item {
    align-self: center;

    picture {
      img {
        max-width: 400px;
      }
    }

    ul {
      li {
        align-items: center;
        display: flex;
        margin: 2rem 0;

        a {
          color: var(--scheme-v3);
          font-weight: 400;
          border-bottom: 2px solid var(--scheme-v3);
          margin: 0 10px 0 0;
        }

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
    gap: calc(var(--scheme-gap) / 2);
    grid-template-columns: 1fr;
    text-align: center;

    &__item {
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
}
</style>
