import React, { useState } from 'react';
import './App.css';
import TeamInfo from './TeamInfo'

const iniitalState = {
  name: 'Lakers',
  city: 'Los Angeles',
  roster: {
      benchPlayers: [
          {id: 1, name: 'Buddy'},
          {id: 2, name: 'Demarcus'},
          {id: 3, name: 'Dwight'},
          {id: 4, name: 'Markus'},
          {id: 5, name: 'Rajon'},
          {id: 6, name: 'Dion'},
          {id: 7, name: 'Alex'}
      ],
      starters: [
          {id: 8, name: 'Lebron'},
          {id: 9, name: 'Anthony'},
          {id: 10, name: 'JaVale'},
          {id: 11, name: 'Danny'},
          {id: 12, name: 'Quinn'}
      ]
  }
}

function App() {
  return (
    <div className="App">
      <h1>{iniitalState.name}</h1>
      <h2>{iniitalState.city}</h2>
      <TeamInfo
        benched={iniitalState.roster.benchPlayers}
        starters={iniitalState.roster.starters}
      />
    </div>
  );
}

export default App;
