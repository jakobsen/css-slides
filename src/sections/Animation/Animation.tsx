import CodeDemo from "@components/CodeDemo/CodeDemo"
import SectionTitle from "@components/SectionTitle"
import Slide from "@components/Slide"
import styles from "./Animation.module.css"

export default function AnimationSection() {
  return (
    <>
      <Slide>
        <div className={styles.title}>
          <SectionTitle>Animasjoner</SectionTitle>
        </div>
      </Slide>

      <Slide>
        <CodeDemo code={simpleTransition} />
      </Slide>

      <Slide>
        <CodeDemo code={transformTransition} />
      </Slide>

      <Slide>
        <CodeDemo
          code={keyframesAnimation}
          otherFiles={{ "/src/spinner.svg": { code: spinnerSvg } }}
        />
      </Slide>
    </>
  )
}

const simpleTransition = `<template>
<a href="#">Besøk siden her da vel</a>
</template>


<style scoped>  
a {
  font-family: 'Avenir';
  color: black;
}

a:hover {
  color: deeppink;
}
</style>

<script>
export default {
name: "App",
};
</script>`

const transformTransition = `<template>
<main>
  <a href="#">Trykk her</a>
</main>
</template>


<style scoped>
main {
  padding: 32px;
  font-family: 'Avenir';
}

a {
  display: block;
  width: max-content;
  color: white;
  background-color: firebrick;
  padding: 8px;
  text-decoration: none;
  font-size: 1.44rem;
  border-radius: 8px;
}

a:hover {
  transform: translateY(-8px) rotate(-3deg);
}
</style>

<script>
export default {
name: "App",
};
</script>
`

const spinnerSvg = `<svg width="64" height="64" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#000">
<g fill="none" fill-rule="evenodd">
    <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
        <path d="M36 18c0-9.94-8.06-18-18-18"></path>
    </g>
</g>
</svg>`

const keyframesAnimation = `<template>
<img src="./spinner.svg" alt="Loading" />
</template>


<style scoped>
img {
  display: block;
}
</style>

<script>
export default {
name: "App",
};
</script>
`
