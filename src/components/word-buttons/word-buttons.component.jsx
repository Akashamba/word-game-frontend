import React from 'react';
import './word-buttons-styles.css';

function markWord(word, status, getNextWord) {
    getNextWord()
    fetch("https://sh-word-game-backend.herokuapp.com/", {
        method: "POST",
        body: {
            word: word,
            status: status
        }
    })
}

export default function Buttons({word, getNextWord}) {
    return(
        <div className="buttons">
            <br/>
            <div onClick={() => markWord(word, "known", getNextWord, )} className="button known">I knew this word</div>
            <div onClick={() => markWord(word, "unknown", getNextWord, )} className="button unknown">I didn't know this word</div>
        </div>
    )
}