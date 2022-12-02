import PositionAbsoluteDemo from "@components/PositionAbsoluteDemo"
import PositionAbsoluteRebel from "@components/PositionAbsoluteRebel"
import PositionRelativeDemo from "@components/PositionRelativeDemo"
import PositionStickyDemo from "@components/PositionStickyDemo"
import PostionFixedDemo from "@components/PositionFixedDemo"
import SectionTitle from "@components/SectionTitle"
import Slide from "@components/Slide"

import styles from "./Positioning.module.css"

export default function PositioningSection() {
  return (
    <>
      <Slide>
        <SectionTitle>
          <code>position: absolute</code>
          <br /> og
          <br />
          <code>position: relative</code>
          <br />
          og sånn
        </SectionTitle>
      </Slide>
      <Slide>
        <PositionRelativeDemo />
      </Slide>
      <Slide>
        <PositionAbsoluteDemo />
      </Slide>
      <Slide>
        <PositionAbsoluteRebel />
      </Slide>
      <Slide>
        <PositionStickyDemo />
      </Slide>
      <Slide>
        <PostionFixedDemo />
      </Slide>
      <Slide>
        <h1 className={styles.heading}>
          Alt handler om <em>containing blocks</em>
        </h1>
        <div className={styles.body}>
          <p>Det finnes unntak, men hovedreglene er:</p>
          <dl>
            <dt>
              <code>position: absolute</code>
            </dt>
            <dd>
              Nærmeste forelder som har en <code>position</code> satt til noe
              annet enn <code>static</code>
            </dd>
            <dt>
              <code>position: fixed</code>
            </dt>
            <dd>Initial containing block, aka viewport</dd>
            <dt>Alt annet</dt>
            <dd>
              Nærmeste block-container (hva som helst med{" "}
              <code>display: block</code>, <code>display: inline-block</code>{" "}
              eller listeelementer.
            </dd>
          </dl>
        </div>
      </Slide>
    </>
  )
}
