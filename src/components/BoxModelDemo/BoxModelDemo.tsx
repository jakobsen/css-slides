import { CSSProperties, useEffect, useRef, useState } from "react"
import styles from "./BoxModelDemo.module.css"

export default function BoxModelDemo() {
  const contentRef = useRef<HTMLDivElement>(null)
  const [caption, setCaption] = useState("")
  const [contentDimensions, setContentDimensions] = useState<{
    height: number
    width: number
  }>()
  const [opacities, setOpacities] = useState({
    "--margin-opacity": 1,
    "--border-opacity": 1,
    "--padding-opacity": 1,
    "--content-opacity": 1,
  })
  useEffect(() => {
    if (contentRef.current == null) return

    const { width, height } = contentRef.current.getBoundingClientRect()
    setContentDimensions({ width, height })
  }, [])

  const fadedOpacity = 0.1

  return (
    <div className={styles.wrapper} style={opacities as CSSProperties}>
      <div
        className={styles.margin}
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
      >
        <div
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
        >
          <div
            className={styles.padding}
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
          >
            <div
              ref={contentRef}
              className={styles.content}
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
            >
              {contentDimensions &&
                `${contentDimensions.width} \u00d7 ${contentDimensions.height}`}
            </div>
          </div>
        </div>
      </div>
      <h1 className={styles.caption}>{caption}</h1>
    </div>
  )
}
