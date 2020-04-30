import React from 'react';
//import ActionBar from "./ActionBar";
//import Content from "./Content";
//import "../src/App.css"

export default class Game extends React.Component {
    render() {
        return (
            <div>
                {this.props.pizzle.question}
                // @userAnswer donde almacenaremos la respuesta del usuario
                /*​ <input type="text" value={this.props.pizzle.userAnswer}/> */
                // para llamar a this.props.onQuestionAnswer in App.js
                <input type = "text"
                       value={this.props.pizzle.userAnswer || ''}
                       onChange={(e)=>this.props.onQuestionAnswer(e.target.value)} />




            </div>
        );
    }
}