import type { ReactNode } from "react"
import styles from "./SectionTitle.module.css"

interface SectionTitleProps {
  children: ReactNode
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h1 className={styles.title}>{children}</h1>
}
