import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {Game} from "./Game";

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <Game pizzle={props.questions[props.currentQuestion]} />
    </div> );
}

function mapStateToProps(state) {
  return{
    ...state
  };
}

export default connect(mapStateToProps)(App);