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

    <h2>Cookies Policy</h2>
    <p>VOOLA (“we”, “us”, “our”) uses cookies (“Cookies”) on the https://voola.io website (“Website”), where we render our Services (“Services”) to the Users (“you”, “your”).</p>

    <ul>
      <span>
        Our Cookies Policy explains what Cookies are, why and how we use Cookies, how the Third Parties (our partners, service providers, contractors, agents, social media, any
        lawfully and legally organized and acting entities) may use Cookies on the Website, and your choice of Cookies.
      </span>

      <li>1. What Cookies Are</li>
      <li>2. Why and How We Use Cookies</li>
      <li>3. Third Party Cookies</li>
      <li>4. Choice of Cookies</li>
    </ul>

    <h3>What Cookies Are</h3>
    <p>
      Cookies are small text files saved to your computer or any usable device, which help us track, save and memorize data about your actions on and use of our Website. A cookie
      file is stored by your web browser and allows the Website or the Third Parties websites to recognize you the next time as you get back to this Website and meet your searching
      and using needs.
    </p>

    <h3>Why and How We Use Cookies</h3>
    <p>
      Cookies help us to enable functionality for provision, protection and enhancement of our Services, to record your browsing activity, to verify your account, to determine when
      you are logged in, to keep your data and account safe and secure, to enable adverts and behavioural advertising, to provide mailings, analytics and research, to monitor
      statistics data, to retain your preferences and information about your actions allowing us to improve your usability and to provide you with the best possible experience on
      our Website. In addition, since our Services are based on fulfilment of finance and settlement transactions, your activity will be ensured by the Cookies that help us duly
      and accurately enable your transactions.
    </p>

    <p>
      When you use and access our Website, we may use essential cookies to authenticate you and prevent fraudulent use of your account. We may use session cookies, persistent or
      permanent cookies, and the third party cookies.
    </p>

    <h3>Third Party Cookies</h3>
    <p>
      We may also use the other websites cookies , inter alia, to gather and analyse various statistics data regarding our Website, as well as for notifications and newsletter
      messages made through our Website regarding the other websites news, promotions, or whatsoever information. We will also use the social media buttons on our Website for your
      transfer to the appropriate social networks. The Third Parties’ external websites use their own Cookies in relation to their own cookies policies, for which we are not
      responsible. If you accept them, you use them at your own risk and discretion, without our responsibility.
    </p>

    <h3>Choice of Cookies</h3>
    <p>
      When accessing our Website, you will be advised to accept/enable of refuse/disable the Cookies. To customise your use of our Website and receive full functionality of our
      Services, we advise you to accept our Cookies. However, if you wish to disable or delete the Cookies, visit your web browser settings or your device’s instructions. Please,
      note that if you choose to opt out the Cookies, our Website will not be able to memorize your visit and make it as convenient to you as we would like to perform. Should you
      have any questions regarding this Cookies Policy, please contact us at:
      <a href="mailto:hello@voola.io">hello@voola.io</a>.
    </p>
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

    a {
      color: var(--scheme-v3);
      cursor: pointer;
    }
  }

  ul {
    margin: 20px 0;

    span {
      font-size: 18px;
    }

    li {
      list-style: disc;
      margin: 10px 0 0 20px;
      padding: 0 0 0 20px;
    }
  }
}
</style>
