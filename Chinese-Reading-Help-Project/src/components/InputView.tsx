import "./InputView.css";
export function InputView({ text, setText, handleClick }: {text: string, setText: React.Dispatch<React.SetStateAction<string>>, handleClick: Function}) {
  return (
    <div className="input-view">
      <h2 className="input-rubric">Enter the text you want to analyze</h2>
      <textarea
        className="input-textarea"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)}
        placeholder="Please enter text"
        cols={40}
        rows={20}
        onKeyDown={(e) => e.ctrlKey && e.key === "q" && handleClick(e)}
      ></textarea>
      <p className="input-text">
        Once you have entered the text you want to analyze, click the continue
        button or use the key binding ctrl+q
      </p>
      <button className="input-button" onClick={(e) => handleClick(e)}>
        Continue
      </button>
    </div>
  );
}
