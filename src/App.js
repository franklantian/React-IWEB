import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log(props)
  return (
    <div>
    </div> );
}

function mapStateToProps(state) {
  return{
    ...state
  };
}

export default connect(mapStateToProps)(App);