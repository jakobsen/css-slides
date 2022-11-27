import { useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import Slide from "./components/Slide"
import BoxModelSection from "./sections/BoxModel"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  return (
    <div className={styles.wrapper} ref={scrollContainerRef}>
      <BoxModelSection />

      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
