import React from 'react';
//import ActionBar from "./ActionBar"; //crear un JS en src
//import Content from "./Content";
import "../src/App.css"

export default class Game extends React.Component {
    render() {
        return (
            <div className="Game">​{this.props.question.question}</div>
        );
    }
}