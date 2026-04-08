import "./WorkView.css"
import {useState} from "react";

export function WorkView({text} : {text: string}) {
    const [selectedIndex, setSelectedIndex] = useState([]);

    function handleButtonClick() {

    }

    const mainBody = <p className="body-text">{text}</p>

    return <>
    <h1>Work area: please analyze your text</h1>
    {mainBody};
    <p>Click the button or press ctrl+q to analyze a word</p>
    <button onClick={handleButtonClick}>Analyze word</button>
    </>;
}

function WordBlock({word} : {word: string}) {
    return <span>{word}</span>
}