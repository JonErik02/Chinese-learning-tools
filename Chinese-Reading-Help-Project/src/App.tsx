import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { InputView } from "./components/InputView.tsx";

function App() {
  const [text, setText] = useState("");
  const [isInputState, setIsInputState] = useState(true);

  function handleChangeIsInputState(e) {
    setIsInputState(!isInputState);
  }
  if (isInputState) {
    return (
      <>
        <InputView
          text={text}
          setText={setText}
          handleClick={handleChangeIsInputState}
        ></InputView>
      </>
    );
  } else {
    // TODO: add something to do after getting input
    return (
      <>
        <p>To be handled</p>
      </>
    );
  }
}

export default App;
