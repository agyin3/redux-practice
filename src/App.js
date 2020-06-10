import React from 'react';
import './App.css';
import TeamInfo from './TeamInfo'
import { connect } from 'react-redux';

function App(props) {
  return (
    <div className="App">
      <h1>{props.name}</h1>
      <h2>{props.city}</h2>
      <TeamInfo />
    </div>
  );
}

// mapStateToProps allows us to subscribe to
// the slice of state from our redux store
// that we want to use in our component 
const mapStateToProps = state => {
  return {
    name: state.name,
    city: state.city
  }
}

// connect() is what connects our React component
// to our Redux store
export default connect(
  mapStateToProps,
  {}
)(App);
