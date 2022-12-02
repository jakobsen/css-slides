import HslDemo from "@components/HslDemo"
import SectionTitle from "@components/SectionTitle"
import Slide from "@components/Slide"

export default function ColorSection() {
  return (
    <>
      <Slide>
        <SectionTitle>Farger</SectionTitle>
      </Slide>
      <Slide>
        TL;DR: <code>hsl</code> er digg
      </Slide>
      <Slide>
        <HslDemo />
      </Slide>
    </>
  )
}
