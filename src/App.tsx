import { LegacyRef, MutableRefObject, RefObject, useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import Slide from "./components/Slide"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  return (
    <div className={styles.wrapper} ref={scrollContainerRef}>
      <Slide>test</Slide>
      <Slide>test</Slide>
      <Slide>test</Slide>

      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
