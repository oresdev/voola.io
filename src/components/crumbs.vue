<template>
  <nav>
    <router-link to="/" custom v-slot="{ navigate }">
      <figure v-on:click="navigate">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40">
          <path fill="none" stroke-width="1.5" d="M4.25 12.2743h15m-8.9502 6.0244-6.05-6.024 6.05-6.025" />
        </svg>
      </figure>
    </router-link>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  background: var(--scheme-v2);
  padding: 2rem;
  position: sticky;
  top: 0;

  svg {
    cursor: pointer;

    max-width: 40px;
    stroke: #d7dbdf;
    transition: 0.3s ease-in-out;

    &:hover {
      stroke: var(--scheme-v3);
    }
  }
}
</style>
