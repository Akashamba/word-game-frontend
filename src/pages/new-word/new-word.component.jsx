import React from 'react';
import Card from '../../components/word-card/word-card.component';
import Buttons from '../../components/word-buttons/word-buttons.component'

function getNextWord(flip, current, setCurrent, setWords) {
    flip(false)
    if(current<9) {
        setCurrent(current+1)
    }
    else {
        setCurrent(0)
        fetchWords(setWords)
    }
}

function fetchWords(setWords) {
    fetch("https://sh-word-game-backend.herokuapp.com/")
        .then(response => response.json())
        .then(words => setWords(words.words))
}

export default function NewWord() {
    const [words, setWords] = React.useState()
    const [current ,setCurrent] = React.useState(0)
    const [isFlipped, flip] = React.useState(false)
    React.useEffect(() => {
        fetchWords(setWords)
    }, [])

    if(words) {
        return (
            <div className="new-word">
                <Card word={words[current]} isFlipped={isFlipped} flip={flip} />
                <Buttons word={words[current]} getNextWord={getNextWord} flip={flip} current={current} setCurrent={setCurrent} setWords={setWords} />
            </div>
        )
    }
    else return (<div></div>)
}