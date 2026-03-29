import "./InputView.css";
export function InputView({ text, setText, handleClick }) {
  return (
    <div className="input-view">
      <h2 class="input-rubric">Enter the text you want to analyze</h2>
      <textarea
        className="input-textarea"
        value={text}
        onChange={(e) => setText(e.value)}
        placeholder="Please enter text"
        cols="40"
        rows="20"
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
