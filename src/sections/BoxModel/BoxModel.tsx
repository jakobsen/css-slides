import BoxModelDemo from "@components/BoxModelDemo"
import BoxSizingDemo from "@components/BoxSizingDemo"
import Slide from "@components/Slide"
import styles from "./BoxModel.module.css"

export default function BoxModelSection() {
  return (
    <>
      <Slide>
        <h1 style={{ fontSize: 64, fontWeight: 600 }}>Boksmodellen</h1>
      </Slide>
      <Slide>
        <BoxModelDemo />
      </Slide>
      <Slide>
        <div className={styles.codeblock}>
          <span className={styles.selector}>*</span>{" "}
          <span className={styles.bracket}>&#123;</span> <br />
          &nbsp;&nbsp;<span className={styles.property}>box-sizing</span>:{" "}
          <span className={styles.value}>border-box</span>;
          <br />
          <span className={styles.bracket}>&#125;</span>
        </div>
      </Slide>
      <Slide>
        <BoxSizingDemo />
      </Slide>
    </>
  )
}
