import CodeDemo from "@components/CodeDemo/CodeDemo"

const relativeCode = `<template>
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
  position: static;
  top: 100px;
  left: 100px;
}

.box.two {
    background-color: lightcoral; 
}

</style>

<script>
export default {
name: "App",
};
</script>
`

export default function PositionRelativeDemo() {
  return <CodeDemo code={relativeCode} />
}
