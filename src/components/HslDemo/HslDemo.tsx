import { useMemo, useState } from "react"
import styles from "./HslDemo.module.css"

export default function HslDemo() {
  const [hue, setHue] = useState(0)
  const [displayHsl, setDisplayHsl] = useState("")
  const percentages = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const rows = useMemo(() => {
    const tempRows: Array<Array<{ saturation: number; lightness: number }>> = []
    percentages.forEach((lightness) => {
      tempRows.push(
        percentages.map((saturation) => ({
          lightness,
          saturation,
        }))
      )
    })
    return tempRows
  }, [hue])
  return (
    <div>
      <div className={styles.inputWrapper}>
        <label htmlFor="hue-range" className={styles.label}>
          Hue
        </label>
        <input
          type="range"
          min={0}
          max={360}
          value={hue}
          onChange={(e) => setHue(Number.parseInt(e.target.value))}
          id="hue-range"
        />
        <span>{hue}</span>
      </div>
      <div className={styles.grid} onMouseLeave={() => setDisplayHsl("")}>
        <h2 className={`${styles.saturationLabel} ${styles.label}`}>
          Saturation
        </h2>
        <h2 className={`${styles.lightnessLabel} ${styles.label}`}>
          Lightness
        </h2>
        {[...rows.reverse()].map((row) =>
          row.map(({ lightness, saturation }) => (
            <div
              className={styles.box}
              style={{
                backgroundColor: `hsl(${hue}deg ${saturation}% ${lightness}%)`,
                color: lightness > 50 ? "black" : "white",
              }}
              key={`${hue}-${saturation}-${lightness}`}
              onMouseEnter={() =>
                setDisplayHsl(`hsl(${hue}deg ${saturation}% ${lightness}%)`)
              }
            >
              S: {saturation} <br />
              L: {lightness}
            </div>
          ))
        )}
      </div>
      <h1 className={styles.displayHsl}>
        <code>{displayHsl}</code>
      </h1>
    </div>
  )
}
