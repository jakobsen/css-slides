import { useEffect, useRef, useState } from "react"
import styles from "./BoxSizingDemo.module.css"
import LineSection from "./LineSection/LineSection"

export default function BoxSizingDemo() {
  const [boxSizing, setBoxSizing] = useState<"border-box" | "content-box">(
    "content-box"
  )
  const [boxWidth, setBoxWidth] = useState<number>()
  const boxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (boxRef.current == null) return
    setBoxWidth(boxRef.current.offsetWidth)
  }, [boxSizing])

  return (
    <div>
      <LineSection />
      <div style={{ boxSizing }} className={styles.box} ref={boxRef}>
        <div>
          width: 400px
          <br />
          padding: 20px
          <br />
          border: 10px
          <br />
          <br />
          Faktisk bredde: {boxWidth}px
          <br />
        </div>
      </div>
      <fieldset className={styles.fieldset}>
        <legend>box-sizing</legend>
        <div>
          <input
            type="radio"
            name="box-sizing"
            id="content-box-radio"
            value="content-box"
            onChange={() => setBoxSizing("content-box")}
            checked={boxSizing == "content-box"}
          />
          <label htmlFor="content-box-radio">content-box</label>
        </div>
        <div>
          <input
            type="radio"
            name="box-sizing"
            id="border-box-radio"
            value="border-box"
            onChange={() => setBoxSizing("border-box")}
            checked={boxSizing == "border-box"}
          />
          <label htmlFor="border-box-radio">border-box</label>
        </div>
      </fieldset>
    </div>
  )
}
