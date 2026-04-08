import { useState } from "react";
import "./App.css";
import { InputView } from "./components/InputView.tsx";
import { WorkView } from "./components/WorkView.tsx";

function App() {
  const [text, setText] = useState("");
  const [isInputState, setIsInputState] = useState(true);

  function handleChangeIsInputState() {
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
        <WorkView text={text} ></WorkView>
      </>
    );
  }
}

export default App;
