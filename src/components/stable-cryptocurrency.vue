<template>
  <section class="grid">
    <div class="grid__item">
      <h2 v-html="t('title')" />

      <p v-html="t('description[0]')" />
    </div>

    <div class="grid__item">
      <picture>
        <source media="(max-width: 799px)" srcset="../assets/images/Group-2.png" />
        <source media="(min-width: 800px)" srcset="../assets/images/Group-2@2x.png" />
        <img src="../assets/images/Group-2@2x.png" alt="" />
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
      title: '稳定的 <b>NFT</b>',
      description: [
        '我们是汇集不可替代的 NFT 代币和法定货币世界的领导者。 作为传统金融体系的突破和使用传统货币的 NFT 的先驱，稳定的 NFT 代币支持和赋能区块链领域不断增长的业务和创新。 稳定的 NFT 代币作为建立在多个区块链上的数字代币存在。 所有稳定的 NFT 代币都与各自的法定货币 1:1 挂钩，并 100% 由储备金支持。 我们发布有关当前总资产和储备的每日报告。<br /><br />稳定的 NFT 代币是一种可收藏的虚拟金币，其面额可以像其他数字货币一样轻松地在区块链上移动，但与真实货币的比例为 1 比 1。',
      ],
    },
    'en-US': {
      title: 'Stable <b>NFT</b> cryptocurrency',
      description: [
        'We are leaders in the field of combining non-fungible NFT tokens and the world of fiat currencies. A breakthrough in the traditional financial system and a pioneer in NFTs using traditional currencies, Stable NFT tokens support and empower growing businesses and innovation in the blockchain space. Stable NFT tokens exist as digital tokens built on multiple blockchains. All Stable NFT tokens are 1:1 pegged to their respective fiat currency and are 100% backed by reserves. We publish a daily report on current total assets and reserves. <br /><br />Stable NFT tokens are virtual collectible gold coins with a denomination that move across the blockchain just as easily as other digital currencies, but are pegged to real currencies at a 1:1 ratio.',
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
        max-width: 500px;
      }
    }
  }

  @media only screen and (max-width: 982px) {
    gap: calc(var(--scheme-gap) / 2);
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }
}
</style>
