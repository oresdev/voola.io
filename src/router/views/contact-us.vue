<template>
  <section>
    <nav>
      <router-link to="/" custom v-slot="{ navigate }">
        <figure v-on:click="navigate" :class="{ reverse: reverse }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40">
            <path fill="none" stroke-width="1.5" d="M4.25 12.2743h15m-8.9502 6.0244-6.05-6.024 6.05-6.025" />
          </svg>
        </figure>
      </router-link>
    </nav>

    <h2>Contact Us</h2>

    <ul>
      <li>
        Address:
        <span
          >2022 UAB <a href="mailto:sevenpossibilities@inbox.lt?subject=Hello">Labaratory of Seven Possibilities</a> operates VOOLA Platform and is registered under number
          <a href="https://www.registrucentras.lt/jar/p/dok.php?kod=306026599" rel="noreferrer" target="_blank">306026599</a> by the State Enterprise Centre of Registers of the
          Republic of Lithuania as a provider of activities of a virtual currency exchange operator.</span
        >
      </li>

      <li>Mail: <a href="mailto:hello@voola.io">hello@voola.io</a></li>
    </ul>
  </section>
</template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
nav {
  margin: 2rem 0 4rem;

  svg {
    cursor: pointer;

    max-width: 40px;
    stroke: var(--scheme-v1);
    transition: 0.3s ease-in-out;

    &:hover {
      stroke: var(--scheme-v3);
    }
  }
}

section {
  padding: 20px var(--temp-gap);

  max-width: var(--scheme-max-width);
  padding: 0 4rem;

  h2 {
    border-bottom: 2px solid var(--scheme-v1);
    margin: 0 0 20px;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 0 0 10px;
  }

  ul {
    margin: 20px 0;

    span {
      font-size: 18px;
    }

    li {
      margin: 10px 0 0 0;

      a {
        color: var(--scheme-v3);
        cursor: pointer;
      }
    }
  }
}
</style>
