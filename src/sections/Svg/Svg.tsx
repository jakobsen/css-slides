import CodeDemo from "@components/CodeDemo/CodeDemo"
import Slide from "@components/Slide"
import SvgLogo from "@components/SvgLogo/SvgLogo"

export default function SvgSection() {
  return (
    <>
      <Slide>
        <SvgLogo />
      </Slide>

      <Slide>
        <CodeDemo code={svgCode} />
      </Slide>
    </>
  )
}

const svgCode = `<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <rect width="24" height="24" class="rectangle" />
</svg>
</template>


<style scoped>

</style>

<script>
export default {
name: "App",
};
</script>
`
