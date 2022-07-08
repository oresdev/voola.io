<template>
  <section>
    <crumbs />

    <h1>Contact Us</h1>

    <article>
      <ul>
        <li>
          Address: 2022 UAB <a href="mailto:sevenpossibilities@inbox.lt?subject=Hello">Labaratory of Seven Possibilities</a> operates VOOLA Platform and is registered under number
          <a href="https://www.registrucentras.lt/jar/p/dok.php?kod=306026599" rel="noreferrer" target="_blank">306026599</a> by the State Enterprise Centre of Registers of the
          Republic of Lithuania as a provider of activities of a virtual currency exchange operator.
        </li>

        <li>Mail: <a href="mailto:hello@voola.io">hello@voola.io</a></li>
      </ul>
    </article>
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
section {
  padding: 0;

  max-width: var(--scheme-max-width);

  article {
    padding: 0 2rem;
  }

  h1 {
    margin: 4rem 0;
    padding: 0 2rem;
  }

  h2 {
    margin: 2rem 0 1rem;
  }

  p {
    margin: 0 0 10px;
  }

  a {
    color: var(--scheme-v3);

    cursor: pointer;

    font-weight: 400;
  }

  ul {
    margin: 2rem 0;

    li {
      list-style: disc;
      margin: 10px 0 0 1rem;
      padding: 0 0 0 1rem;
    }
  }
}
</style>
