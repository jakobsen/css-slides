import { useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import BoxModelSection from "./sections/BoxModel"
import ColorSection from "./sections/Color"
import PositioningSection from "./sections/Positioning"
import ZIndexSection from "./sections/ZIndex"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  return (
    <div className={styles.wrapper} ref={scrollContainerRef}>
      <BoxModelSection />
      <PositioningSection />
      <ZIndexSection />
      <ColorSection />

      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
