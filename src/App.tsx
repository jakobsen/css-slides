import { useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import BoxModelSection from "./sections/BoxModel"
import PositioningSection from "./sections/Positioning/Positioning"
import ZIndexSection from "./sections/ZIndex/ZIndex"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  return (
    <div className={styles.wrapper} ref={scrollContainerRef}>
      <BoxModelSection />
      <PositioningSection />
      <ZIndexSection />

      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
