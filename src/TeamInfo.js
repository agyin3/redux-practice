import React from 'react'

const PlayerInfo = (props) => {
    return (
        <div style={{display: 'flex'}}>
        <div style={{width: '50%'}}>
            Bench Players
            {props.benched.map(player => (
                <div>
                    <p>{player.name}</p>
                    <button>Put in game</button>
                </div>
            ))}
        </div>
        <div style={{width: '50%'}}>
            Players in game
            {props.starters.map(player => (
                <div>
                    <p>{player.name}</p>
                    <button>Bench</button>
                </div>
            ))}
        </div> 
        </div>
    )
}

export default PlayerInfo