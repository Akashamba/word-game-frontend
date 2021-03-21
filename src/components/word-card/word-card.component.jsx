import React from 'react';
import ReactCardFlip from 'react-card-flip';
import './word-card.styles.css'

export default function Card({word, flip, isFlipped}) {
    if(word)
        return (
            <div onClick={() => flip()} className="word-card">
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <div className="word-card-front">
                        <h2>{word.word}</h2>
                    </div>

                    <div className="word-card-back">
                        <p className="word-card-back-line"><b>Word:</b> {word.word}</p>
                        <p className="word-card-back-line"><b>Type:</b> {word.type}</p>
                        <p className="word-card-back-line"><b>Meaning:</b> {word.meaning}</p>
                        <p className="word-card-back-line"><b>Example:</b> {word.example}</p>
                    </div>
                </ReactCardFlip>
            </div>

        )
    else return (<div></div>)
}