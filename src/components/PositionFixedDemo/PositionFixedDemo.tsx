import CodeDemo from "@components/CodeDemo/CodeDemo"

const fixedCode = `<template>
<main>
  <div class="container">
    <div class="box two"></div>
  </div>
</main>
</template>


<style scoped>
  .container {
    height: 150vh;
    margin: 32px;
    margin-bottom: 150vh;
    border: solid 4px black;
    border-radius: 32px;
  }

  .box {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: lightcoral; 
    position: fixed;
    top: 10px;
  }

</style>

<script>
export default {
name: "App",
};
</script>
`

export default function PositionFixedDemo() {
  return <CodeDemo code={fixedCode} />
}
