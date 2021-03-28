import React from 'react';
import Card from '../../components/word-card/word-card.component';
import Buttons from '../../components/word-buttons/word-buttons.component'

class NewWord extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            words: {},
            current: 0,
            isFlipped: false,
        }
    }

    componentDidMount() {
        this.fetchWords()
    }

    fetchWords = () => {
        fetch(`${process.env.REACT_APP_API}/api/placeholder-words`)
        .then(response => response.json())
        .then(words => this.setState({words: words, current: 0, isFlipped: false}))
    }

    getNextWord = () => {
        if(this.state.current< this.state.words.length - 1) {
            this.setState({isFlipped: false, current: this.state.current+1})
        }
        else {
            this.fetchWords()
            this.setState({isFlipped: false, current: 0})
        }
    }

    flip = () => {
        this.setState({isFlipped: !this.state.isFlipped})
    }

    render() {
        const {words, current, isFlipped} = this.state;
        if(words) {
            return (
                <div className="new-word">
                    <Card word={words[current]} flip={this.flip} isFlipped={isFlipped}/>
                    <Buttons word={words[current]} getNextWord={this.getNextWord}/>
                </div>
            )
        }
        else return (<div></div>)
    }
}

export default NewWord