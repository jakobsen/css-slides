import { Sandpack } from "@codesandbox/sandpack-react"
import { freeCodeCampDark } from "@codesandbox/sandpack-themes"
import styles from "./CodeDemo.module.css"

interface CodeDemoProps {
  code?: string
}

const DEFAULT_CODE = `<template>
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
}

</style>

<script>
export default {
name: "App",
};
</script>
`

export default function CodeDemo({ code = DEFAULT_CODE }: CodeDemoProps) {
  return (
    <Sandpack
      theme={freeCodeCampDark}
      options={{
        classes: {
          "sp-wrapper": styles.wrapper,
          "sp-layout": styles.layout,
          "sp-stack": styles.stack,
          "sp-code-editor": styles.codeEditor,
        },
      }}
      files={{
        "/src/App.vue": {
          code,
        },
      }}
      template="vue"
    />
  )
}
