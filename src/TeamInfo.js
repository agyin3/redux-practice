import React from 'react'
import { connect } from 'react-redux'

// Import our action creator here
import { benchPlayer, startPlayer } from './actions'

const PlayerInfo = (props) => {
    return (
        <div style={{display: 'flex'}}>
        <div style={{width: '50%'}}>
            Bench Players
            {props.benched.map(player => (
                <div>
                    <p>{player.name}</p>
                    <button onClick={() => props.startPlayer(player)}>Put in game</button>
                </div>
            ))}
        </div>
        <div style={{width: '50%'}}>
            Players in game
            {props.starters.map(player => (
                <div>
                    <p>{player.name}</p>
                    <button onClick={() => props.benchPlayer(player)}>Bench</button>
                </div>
            ))}
        </div> 
        </div>
    )
}

// Again we use mapStateToProps to 
// subscribe to our slice of state
// from the redux store
const mapStateToProps = state => {
    return {
        benched: state.roster.benchPlayers,
        starters: state.roster.starters
    }
}

// Again we use connect() to
// connect our redux component 
// with our redux store

export default connect(
    mapStateToProps,

    // Here we are passing in our
    // action as our second parameter
    {benchPlayer, startPlayer}
)(PlayerInfo)