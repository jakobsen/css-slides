import styles from './Slide.module.css';
import type { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
}

export default function Slide({ children }: SlideProps) {
  return <article className={styles.wrapper}>
    <div className={styles.content}>
    {children}
    </div>
  </article>
};
