import Title from "./components/Title";
import Subtitle from "./components/Subtitle";
import Statustext from "./components/Statustext";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Subtitle />
      <Statustext />
    </div>
  )
}

export default App
