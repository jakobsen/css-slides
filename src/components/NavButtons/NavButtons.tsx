import type { RefObject } from "react"
import { ChevronLeft, ChevronRight } from "../icons"
import styles from "./NavButtons.module.scss"

interface NavButtonsProps {
  scrollContainerRef: RefObject<HTMLDivElement>
}

export default function NavButtons({ scrollContainerRef }: NavButtonsProps) {
  const iconSize = 32

  function handleClick(scrollDirection: "up" | "down") {
    if (scrollContainerRef.current == null) return
    const coefficient = scrollDirection == "up" ? -1 : 1
    scrollContainerRef.current.scrollBy(0, window.innerHeight * coefficient)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={() => handleClick("up")}>
        <ChevronLeft size={iconSize} />
      </button>
      <button className={styles.button} onClick={() => handleClick("down")}>
        <ChevronRight size={iconSize} />
      </button>
    </div>
  )
}
