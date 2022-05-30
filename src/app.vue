<template>
  <main>
    <hero />

    <what-does-voola-give-you />

    <voola-cryptocards />

    <where-to-begin />

    <stable-cryptocurrency />

    <what-are-stable-tokens />

    <where-to-store />

    <assets-and-blockchains />

    <wallet-app />

    <what-is-cryptocurrencies-staking />

    <acquisition-of />

    <crypto-voucher />

    <ar-marketplace />

    <social />
  </main>

  <footer>
    <section>
      <figure>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 59.83" width="82">
          <path
            fill="var(--scheme-v3)"
            d="M200 59.83s-44.13-48.2-46.97-51.04c-2.85-2.85-6.17-5.05-9.88-6.56C139.57.78 135.79.04 131.92.04s-7.65.74-11.23 2.19c-3.71 1.5-7.03 3.71-9.88 6.56l-.09.09-6.99 7.62 8.92 8.57 7-7.63c6.83-6.73 17.85-6.7 24.64.09 3.3 3.3 5.12 7.69 5.12 12.36s-1.82 9.06-5.12 12.36c-6.79 6.79-17.82 6.82-24.64.09L89.03 8.98l-.09-.1-.09-.09C86 5.94 82.68 3.74 78.97 2.23 75.38.78 71.61.04 67.73.04S60.08.78 56.5 2.23c-3.71 1.5-7.03 3.71-9.88 6.56-2.85 2.85-5.05 6.17-6.56 9.88-.67 1.64-1.18 3.33-1.54 5.04L16.79 0H0s43.77 48.16 46.62 51.01c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56l.09-.09 7-7.63-8.44-9.12L80 42.35c-6.83 6.73-17.85 6.7-24.64-.09-6.82-6.82-6.82-17.91 0-24.73 6.79-6.79 17.82-6.82 24.64-.09l30.61 33.37.09.1.09.09c2.85 2.85 6.17 5.05 9.88 6.56 3.58 1.45 7.36 2.19 11.23 2.19s7.65-.74 11.23-2.19c3.71-1.5 7.03-3.71 9.88-6.56 2.85-2.85 5.05-6.17 6.56-9.88.7-1.73 1.24-3.51 1.6-5.32l22.03 24.02h16.79Z"
          />
        </svg>

        <figcaption>
          2022 UAB <a href="mailto:sevenpossibilities@inbox.lt?subject=Hello">Labaratory of Seven Possibilities</a> operates VOOLA Platform and is registered under number
          <a href="https://www.registrucentras.lt/jar/p/dok.php?kod=306026599" rel="noreferrer" target="_blank">306026599</a> by the State Enterprise Centre of Registers of the
          Republic of Lithuania as a provider of activities of a virtual currency exchange operator.
        </figcaption>
      </figure>
    </section>
  </footer>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@font-face {
  font-family: 'iconly';
  src: url('@/assets/fonts/icons/iconly.eot?3s58v3');
  src: url('@/assets/fonts/icons/iconly.eot?3s58v3#iefix') format('embedded-opentype'), url('@/assets/fonts/icons/iconly.woff?3s58v3') format('woff'),
    url('@/assets/fonts/icons/iconly.ttf?3s58v3') format('truetype'), url('@/assets/fonts/icons/iconly.svg?3s58v3#iconly') format('svg');

  font-display: swap;
}

i {
  color: var(--scheme-v3);

  /* use !important to prevent issues with browser extensions that change fonts */
  font: 300 40px / 1 'iconly' !important;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-bag:before {
  content: '\e900';
}
.icon-buy:before {
  content: '\e901';
}
.icon-call:before {
  content: '\e902';
}
.icon-download:before {
  content: '\e903';
}
.icon-filter:before {
  content: '\e904';
}
.icon-lock:before {
  content: '\e905';
}
.icon-password:before {
  content: '\e906';
}
.icon-shield-done:before {
  content: '\e907';
}
.icon-swap:before {
  content: '\e908';
}
.icon-tick-square:before {
  content: '\e909';
}
.icon-ticket-star:before {
  content: '\e90a';
}
.icon-wallet:before {
  content: '\e90b';
}

// initialize project fonts from @assets
@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-light'), url('@/assets/fonts/renner-light.otf') format('opentype');
  font-weight: 300;
}

@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-book'), url('@/assets/fonts/renner-book.otf') format('opentype');
  font-weight: 400;
}

@font-face {
  font-family: 'Renner*';
  src: local('@/assets/fonts/renner-medium'), url('@/assets/fonts/renner-medium.otf') format('opentype');
  font-weight: 500;
}

:root {
  // project color palete
  --scheme-v1: #151f32; // primary scheme
  --scheme-v2: #ffffff;
  --scheme-v3: #4e94d7;
  --scheme-v4: #f4f7fc;

  // project gradient palete
  --scheme-gradient: linear-gradient(to right, var(--scheme-v3), var(--scheme-v4));

  // project font-family
  --scheme-font: 'Renner*', 'Helvetica', sans-serif;
  --scheme-h: 46px;
  --scheme-m: 32px;
  --scheme-s: 18px;

  // project default template width
  --scheme-max-width: 1280px; // desktop
  --scheme-min-width: 320px; // 5 SE

  // project default template height
  --scheme-min-height: 568px; // 5 SE

  // project default template gap
  --scheme-gap: 100px;

  // project ex. header & footer height
  --scheme-offset: 100px;
}

// project reset css
* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
}

body {
  background: var(--scheme-v2);
  color: var(--scheme-v1);

  font: 300 17px / 1.64 var(--scheme-font);

  // user-select: none;
  ::selection {
    background: var(--scheme-v3);
  }
  position: relative;
}

main,
section {
  position: relative;
}

section {
  margin: auto;
  max-width: var(--scheme-max-width);
  padding: 0 4rem;
}

footer {
  background-color: var(--scheme-v4);
  margin: 6rem 0 0;

  section {
    padding: 2rem 4rem;

    figure {
      align-items: center;
      display: grid;
      gap: var(--scheme-gap);
      grid-template-columns: 100px 1fr;

      figcaption {
        a {
          text-decoration: underline;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      figure {
        gap: 20px;
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
      }
    }
  }
}

h1,
h2,
h3,
h4,
h5 {
  font-weight: 300;
  margin: 0;
}

h1 {
  font: 300 var(--scheme-h) / 1.42 var(--scheme-font);
  margin: 8rem 0 2rem;
}

h2 {
  font: 300 var(--scheme-m) / 1.42 var(--scheme-font);
  margin: 0 0 2rem;
}

h3 {
  font: 400 var(--scheme-s) / 1.42 var(--scheme-font);
  margin: 0 0 1rem;
}

a {
  color: inherit;
  text-decoration: none;
}

b {
  font-weight: 400;
}

p {
  margin: 0;
}

strong {
  font: inherit;
}

ul {
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
}

figure {
  margin: 0;

  img {
    display: block;
    // object-fit: cover;
    width: 100%;
  }

  svg {
    vertical-align: middle;
  }
}

picture {
  img {
    width: 100%;
  }
}

input,
button {
  background: none;
  border: none;
  box-shadow: none;

  font: var(--scheme-font);

  margin: 0;
  outline: none;
  padding: 0;
}

// set default button properties
button {
  background-color: var(--scheme-v3);
  border-radius: 16px;
  color: var(--scheme-v2);

  cursor: pointer;

  font-size: var(--scheme-s);
  margin: 4rem 0 0;
  padding: 16px 80px;
}
</style>
