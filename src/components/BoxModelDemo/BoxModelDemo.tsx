import { CSSProperties, useState } from "react"
import styles from "./BoxModelDemo.module.css"

export default function BoxModelDemo() {
  const [caption, setCaption] = useState("")
  const [opacities, setOpacities] = useState({
    "--margin-opacity": 1,
    "--border-opacity": 1,
    "--padding-opacity": 1,
    "--content-opacity": 1,
  })

  const fadedOpacity = 0.4
  const paddingInPx = 65
  const parentWidth = 800
  const parentHeight = 600

  return (
    <div>
      <svg
        className={styles.svg}
        width={parentWidth}
        height={parentHeight}
        xmlns="http://www.w3.org/2000/svg"
        style={opacities as CSSProperties}
        viewBox="0 0 800 600"
      >
        <mask id="margin-mask">
          <rect width={parentWidth} height={parentHeight} fill="white" />
          <rect
            width={parentWidth - 2 * paddingInPx}
            height={parentHeight - 2 * paddingInPx}
            x={paddingInPx}
            y={paddingInPx}
            fill="black"
          />
        </mask>
        <mask id="border-mask">
          <rect width={parentWidth} height={parentHeight} fill="white" />
          <rect
            width={parentWidth - 4 * paddingInPx}
            height={parentHeight - 4 * paddingInPx}
            x={2 * paddingInPx}
            y={2 * paddingInPx}
            fill="black"
          />
        </mask>
        <mask id="padding-mask">
          <rect width={parentWidth} height={parentHeight} fill="white" />
          <rect
            width={parentWidth - 6 * paddingInPx}
            height={parentHeight - 6 * paddingInPx}
            x={3 * paddingInPx}
            y={3 * paddingInPx}
            fill="black"
          />
        </mask>
        <rect
          width={800}
          height={600}
          className={styles.margin}
          mask="url(#margin-mask)"
          stroke="black"
          strokeWidth={2}
          strokeDasharray={4}
          onMouseEnter={() => {
            setCaption("Margin")
            setOpacities({
              "--margin-opacity": 1,
              "--border-opacity": fadedOpacity,
              "--padding-opacity": fadedOpacity,
              "--content-opacity": fadedOpacity,
            })
          }}
          onMouseLeave={() => {
            setCaption("")
            setOpacities({
              "--margin-opacity": 1,
              "--border-opacity": 1,
              "--padding-opacity": 1,
              "--content-opacity": 1,
            })
          }}
        />
        <rect
          x={paddingInPx}
          y={paddingInPx}
          width={parentWidth - 2 * paddingInPx}
          height={parentHeight - 2 * paddingInPx}
          mask="url(#border-mask)"
          stroke="black"
          strokeWidth="2"
          className={styles.border}
          onMouseEnter={() => {
            setCaption("Border")
            setOpacities({
              "--margin-opacity": fadedOpacity,
              "--border-opacity": 1,
              "--padding-opacity": fadedOpacity,
              "--content-opacity": fadedOpacity,
            })
          }}
          onMouseLeave={() => {
            setCaption("Margin")
            setOpacities({
              "--margin-opacity": 1,
              "--border-opacity": fadedOpacity,
              "--padding-opacity": fadedOpacity,
              "--content-opacity": fadedOpacity,
            })
          }}
        />
        <rect
          x={2 * paddingInPx}
          y={2 * paddingInPx}
          width={parentWidth - 4 * paddingInPx}
          height={parentHeight - 4 * paddingInPx}
          className={styles.padding}
          mask="url(#padding-mask)"
          stroke="gray"
          strokeWidth={2}
          strokeDasharray={4}
          onMouseEnter={() => {
            setCaption("Padding")
            setOpacities({
              "--margin-opacity": fadedOpacity,
              "--border-opacity": fadedOpacity,
              "--padding-opacity": 1,
              "--content-opacity": fadedOpacity,
            })
          }}
          onMouseLeave={() => {
            setCaption("Border")
            setOpacities({
              "--margin-opacity": fadedOpacity,
              "--border-opacity": 1,
              "--padding-opacity": fadedOpacity,
              "--content-opacity": fadedOpacity,
            })
          }}
        />
        <rect
          x={3 * paddingInPx}
          y={3 * paddingInPx}
          width={parentWidth - 6 * paddingInPx}
          height={parentHeight - 6 * paddingInPx}
          className={styles.content}
          stroke="gray"
          strokeWidth={2}
          onMouseEnter={() => {
            setCaption("Content")
            setOpacities({
              "--margin-opacity": fadedOpacity,
              "--border-opacity": fadedOpacity,
              "--padding-opacity": fadedOpacity,
              "--content-opacity": 1,
            })
          }}
          onMouseLeave={() => {
            setCaption("Padding")
            setOpacities({
              "--margin-opacity": fadedOpacity,
              "--border-opacity": fadedOpacity,
              "--padding-opacity": 1,
              "--content-opacity": fadedOpacity,
            })
          }}
        />
      </svg>
      <h1 className={styles.caption}>{caption}</h1>
    </div>
  )
}
