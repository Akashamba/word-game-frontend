import React from 'react';
import './word-buttons-styles.css';

function markWord(word, status, getNextWord) {
    getNextWord()
    fetch(`${process.env.REACT_APP_API}/api/mark-word`, {
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
            <div onClick={() => markWord(word, "known", getNextWord, )} className="button known">Correct</div>
            <div onClick={() => markWord(word, "unknown", getNextWord, )} className="button unknown">Wrong</div>
        </div>
    )
}