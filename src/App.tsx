import styles from './app.module.css';
import Slide from "./components/Slide";

function App() {
  return (
    <div className={styles.wrapper}>
      <Slide>test</Slide>
      <Slide>test</Slide>
      <Slide>test</Slide>
    </div>
  );
}

export default App;