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

    <h2>VOOLA AML</h2>
    <p>
      Senior management of VOOLA limited understands legal and reputational risks associated with the financial services provided by the company and is fully committed to support
      local and international efforts to prevent money laundering, terrorist financing, tax evasion and other illicit activities.
    </p>

    <p>
      It is a crime to engage knowingly in a transaction that involves the proceeds of criminal activity – Money Laundering.It is a crime to use legally or illegally obtained funds
      to support terrorism – Financing terrorism.
    </p>

    <p>
      Additional to regulatory risk, a key risk to VOOLA is reputational which is the possible damage to the company and its employees reputation if they happen to engage in money
      laundering or terrorist financing scheme.
    </p>

    <p>
      In order to operate in compliance with all applicable laws and regulations such as FATF recommendations, Switzerland, EU, UK and St.Vincent and the Grenadines regulations
      VOOLA Limited sets internal policy and procedures which is a standard throughout the organization and ensure safety of our services.
    </p>

    <p>This policy is implemented in all departments and controlled affiliates of the company.</p>

    <p>
      All employees of the company should know and follow these policy requirements, learn the red flags, carefully observe and escalate when somethings does seem unusual or
      suspicious.
    </p>

    <p>
      Our AML department goal is to build strong AML culture based on education and risk based approach. Appointed MLRO is to define risks, countermeasures, consult colleagues,
      establish monitoring system, communicate with authorities.oversee that employees receive initial and periodic training.
    </p>

    <p>
      Management of the company is responsible to ensure that commitment to this policy is supported by sufficient authority and resources. Employees are aware of the consequences
      of non-compliance.
    </p>

    <ul>
      <span> The Policy is covering following topics: </span>

      <li>Each service of the company has its risk assessed and mitigation processes are designed, developed and implemented</li>
      <li>The responsible team is trained to define the level of KYC required and perform the due diligence procedures.</li>
      <li>Systems for identifying risks, monitoring unusual activity, investigating, reporting suspicious activities are developed and running constantly.</li>
      <li>Initial and regular training materials are provided to employees of the company according to the level of responsibility.</li>
      <li>The compliance processes are undergoing regular external and internal audit.</li>
      <li>
        Each compliance process: identification, verification, training, red flags, screening matches, investigations, internal and external reporting are properly documented and
        records are kept for at least 5 years.
      </li>
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
