<template>
  <div class="to" v-scroll-to="'#terms'">
    <div class="to__bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.to {
  border: 3px solid var(--scheme-v4);
  border-radius: 15px;
  bottom: 2rem;
  cursor: pointer;
  height: 50px;
  position: fixed;
  right: 1rem;
  width: 30px;

  &__bottom {
    animation: scroller 1500ms ease-out infinite;
    background-color: var(--scheme-v3);
    border-radius: 8px;
    left: 4px;
    position: absolute;
    bottom: 25px;
    top: 4px;
    width: 16px;
  }
}

@keyframes scroller {
  0% {
    bottom: 25px;
  }
  5% {
    top: 4px;
  }
  32% {
    bottom: 4px;
  }
  66% {
    top: 25px;
    bottom: 4px;
  }
  100% {
    top: 4px;
    bottom: 25px;
  }
}
</style>
