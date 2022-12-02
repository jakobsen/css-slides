import CodeDemo from "@components/CodeDemo/CodeDemo"
import SectionTitle from "@components/SectionTitle"
import Slide from "@components/Slide"

import styles from "./ZIndex.module.css"

export default function ZIndexSection() {
  return (
    <>
      <Slide>
        <SectionTitle>
          <code>z-index: 99999;</code>
        </SectionTitle>
      </Slide>
      <Slide>
        <CodeDemo code={basicDemoCode} />
      </Slide>
      <Slide>
        <CodeDemo
          code={brokenCode}
          otherFiles={{
            "src/pretty.css": {
              code: prettyCss,
            },
          }}
        />
      </Slide>
      <Slide>
        <CodeDemo
          code={promotionsCode}
          otherFiles={{
            "src/pretty.css": {
              code: prettyCss2,
            },
          }}
        />
      </Slide>
      <Slide>
        <div className={styles.wrapper}>
          <h1 className={styles.heading}>
            <em>
              Du kan posisjonere elementer vertikalt innad i en stacking
              context, men ikke på tvers av dem
            </em>
          </h1>
          <p className={styles.body}>
            De vanligste måtene å skape en stacking context på er en kombinasjon
            av <code>position: absolute</code> eller <code>relative</code>{" "}
            kombinert med en <code>z-index</code> satt til noe annet enn{" "}
            <code>auto</code>, eller <code>isolation: isolate</code>, men det
            finnes{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context#description"
              target="_blank"
              rel="noreferrer"
            >
              det finnes en haug med alternativer
            </a>
            .
          </p>
        </div>
      </Slide>
    </>
  )
}

const basicDemoCode = `<template>
<main>
  <div class="box one"></div>
  <div class="box two"></div>
</main>
</template>


<style scoped>

.box {
  height: 200px;
  width: 200px;
  border-radius: 8px;
}

.box.one {
  background-color: peachpuff;
  position: relative;
  top: 100px;
  left: 100px;
}

.box.two {
    background-color: lightcoral; 
    position: relative;
}

</style>

<script>
export default {
name: "App",
};
</script>`

const brokenCode = `<template>
<main>
  <header>
    <h1>Internettbutikk</h1>
  </header>
  <section>
    <div class="info-banner">DU ER VEL IKKE IDIOT?</div>

    <div>
      <h2>Velkommen til internettbutikken</h2>
      <p>Vi har <em>SINNSYKE</em> tilbud hele tiden.</p>
      <p>Om du ikke kjøper er du helt idiot.</p>
    </div>
  </section>
</main>
</template>


<style scoped>
@import './pretty.css';

header {
  position: relative;
  z-index: 2;
}

section {
  position: relative;
  z-index: 1;
}

.info-banner {
  position: absolute;
  z-index: 9999999;
}

</style>

<script>
export default {
name: "App",
};
</script>`

const prettyCss = `main {
  font-family: 'Avenir';
  --hue: 230deg;
  --text-color: hsl(var(--hue) 50% 10%);
  --background-color: hsl(var(--hue) 50% 95%);
}

header {
  padding: 32px;
  color: var(--text-color);
  border: 4px solid var(--text-color);
  background-color: var(--background-color);
}

.info-banner {
  --hue: 0deg;
  --text-color: hsl(var(--hue) 50% 10%);
  --background-color: hsl(var(--hue) 50% 95%);
  left: 0;
  right: 0;
  top: -40px;
  margin: 0 auto;
  width: max-content;
  color: var(--text-color);
  border-radius: 16px;
  border: 2px solid var(--text-color);
  background-color: var(--background-color);
  padding: 8px;
}
`

const promotionsCode = `<template>
<main>
  <header>
    <h1>Internettbutikk</h1>
  </header>
  <section>
    <div class="promotions-wrapper">
      <div class="promotion">20 kr</div>
      <div class="promotion main">30 kr</div>
      <div class="promotion">40 kr</div>
    </div>
  </section>
</main>
</template>


<style scoped>
@import './pretty.css';

header {
  position: fixed;
  z-index: 2;
}

.main.promotion {
  z-index: 2;
}

</style>

<script>
export default {
name: "App",
};
</script>`

const prettyCss2 = `main {
  font-family: 'Avenir';
  --hue: 230deg;
  --text-color: hsl(var(--hue) 50% 10%);
  --background-color: hsl(var(--hue) 50% 95%);
}

header {
  width: 100%;
  top: 0;
  background: white;
  border-bottom: 2px solid black;
}

section {
  margin-top: 200px;
  margin-bottom: 120vh;
}

section {
  position: relative;
}

.promotions-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 300px;
  gap: 16px;
}

.promotion {
  display: grid;
  place-items: center;
  font-size: 3.5rem;
  font-weight: 700;
  border: 4px solid black;
  border-radius: 32px;
  background-color: hsl(var(--hue) 50% 90%);
}

.main.promotion {
  margin: -40px;
}
`
