import React from 'react';
import Card from '../../components/word-card/word-card.component';

export default function NewWord() {
    const word = {
        "word": "denouement",
        "type": "noun",
        "meaning": "the final resolution of the many strands of a literary or dramatic work; the outcome of a complex sequence of events",
        "example": "At the denouement of the movie, all questions were answered, and the true identity of the robber was revealed."
    }
    const [isFlipped, flip] = React.useState(false)

    return (
        <div className="new-word">
            <Card word={word} isFlipped={isFlipped} flip={flip} />
        </div>
    )
}