import React from 'react';
import Card from '../../components/word-card/word-card.component';

function nextWord(flip, current, setCurrent) {
    flip(false)
    if(current<9) {
        setCurrent(current+1)
    }
    else setCurrent(0)
}

export default function NewWord() {
    const [words, setWords] = React.useState()
    const [current ,setCurrent] = React.useState(0)
    const [isFlipped, flip] = React.useState(false)
    React.useEffect(() => {
        fetch("https://sh-word-game-backend.herokuapp.com/")
        .then(response => response.json())
        .then(words => setWords(words.words))
    })

    if(words) {
        return (
            <div className="new-word">
                <Card word={words[current]} isFlipped={isFlipped} flip={flip} />
                <button onClick={() => nextWord(flip, current, setCurrent)}>Click</button>
            </div>
        )
    }
    else return (<div></div>)
}