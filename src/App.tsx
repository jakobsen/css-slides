import FullScreenButton from "@components/FullScreenButton"
import { useEffect, useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import AnimationSection from "./sections/Animation"
import BoxModelSection from "./sections/BoxModel"
import ColorSection from "./sections/Color"
import PositioningSection from "./sections/Positioning"
import ZIndexSection from "./sections/ZIndex"

function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.target != document.body) return
      if (e.key == "ArrowRight") {
        scrollContainerRef.current?.scrollBy(0, window.innerHeight)
      } else if (e.key == "ArrowLeft") {
        scrollContainerRef.current?.scrollBy(0, -window.innerHeight)
      }
    }
    window.addEventListener("keydown", listener)
    return () => window.removeEventListener("keydown", listener)
  }, [])

  return (
    <div className={styles.wrapper} ref={scrollContainerRef}>
      <BoxModelSection />
      <PositioningSection />
      <ZIndexSection />
      <ColorSection />
      <AnimationSection />

      <FullScreenButton scrollContainerRef={scrollContainerRef} />
      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
