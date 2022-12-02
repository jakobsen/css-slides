import FullScreenButton from "@components/FullScreenButton"
import SectionTitle from "@components/SectionTitle"
import Slide from "@components/Slide"
import { useEffect, useRef } from "react"
import styles from "./app.module.css"
import NavButtons from "./components/NavButtons"
import AnimationSection from "./sections/Animation"
import BoxModelSection from "./sections/BoxModel"
import ColorSection from "./sections/Color"
import PositioningSection from "./sections/Positioning"
import SvgSection from "./sections/Svg"
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
      <Slide>
        <SectionTitle>CSS 💖</SectionTitle>
      </Slide>
      <Slide>
        <ul className={styles.list}>
          <li>Boksmodellen</li>
          <li>Position</li>
          <li>Z-index</li>
          <li>Farger</li>
          <li>Animasjon</li>
          <li>SVG-er</li>
        </ul>
      </Slide>
      <BoxModelSection />
      <PositioningSection />
      <ZIndexSection />
      <ColorSection />
      <AnimationSection />
      <SvgSection />

      <Slide>
        <SectionTitle>Godt julebord 🤠</SectionTitle>
      </Slide>

      <FullScreenButton scrollContainerRef={scrollContainerRef} />
      <NavButtons scrollContainerRef={scrollContainerRef} />
    </div>
  )
}

export default App
