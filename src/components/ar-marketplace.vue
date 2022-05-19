<template>
  <section class="grid">
    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Group-1259.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Group-1259@2x.png" />
        <img src="../assets/images/Group-1259@2x.png" alt="" />
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
      title: 'Voola <b>AR NFT</b> 市场',
      description:
        '你见过虚拟现实中的物体吗？ NFT 有 2D 和 3D 类型，用于各种行业：在 Voola 市场中，您可以找到所有这些类型的 NFT。您可以在购买之前在家中查看数字资产，使用网络浏览器并在 AR 设备中查看您自己的 NFT。借助 AR，您可以将正在查看的作品与周围环境联系起来，并且可以通过声音、视觉或其他虚拟效果探索新体验。所有流程都是通过简单的界面自动完成的，您只需单击两次即可以低佣金进行购买。',
    },
    'en-US': {
      title: '<b>AR NFT</b> Marketplace',
      description:
        'NFT have 2D & 3D types and used in different industries: In Voola marketplace you can find all of this types NFT. You can see digital assets at home before actually purchasing them, use web-browser and look at your own NFT in AR device. Thanks to AR, you can associate the work you are viewing with the conditions of your environment, and you can explore new experiences with sound, visual, or other virtual effects. All procceses are automatical with simple interface and all you need is two clicks to make a purchase with a low fees.',
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
