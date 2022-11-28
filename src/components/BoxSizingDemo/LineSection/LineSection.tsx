import styles from "./LineSection.module.css"

export default function LineSection() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.label}>400 px</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 409.59 49.29"
        width={409.59}
        height="auto"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M4.79 24.64h400M404.79 44.64v-40M4.79 44.64v-40"
        />
      </svg>
    </div>
  )
}
