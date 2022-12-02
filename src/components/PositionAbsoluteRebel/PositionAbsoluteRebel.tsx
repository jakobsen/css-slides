import CodeDemo from "@components/CodeDemo/CodeDemo"

const absoluteRebelCode = `<template>
<main>
  <div class="container">
    <div class="box"></div>
  </div>
</main>
</template>


<style scoped>
.container {
  height: 400px;
  width: 400px;
  border: solid 4px black;
  border-radius: 32px;
  margin: 120px auto;
}

.box {
  background-color: lightcoral;
  position: absolute;
  height: 200px;
  width: 200px;
  top: 50px;
  left: 50px;
  border-radius: 8px;
}

</style>

<script>
export default {
name: "App",
};
</script>
`

export default function PositionAbsoluteRebel() {
  return <CodeDemo code={absoluteRebelCode} />
}
