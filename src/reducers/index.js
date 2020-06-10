import * as types from '../types'

// Here we are creating our initialState object
const initialState = {
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

// When creating our rerducer it will always accept two parameters
// You can do this one of two ways: 
// `state = initalState`, `action` OR `state = initalState`, `{type, payload}`
// Inside of our reducer we will have a switch statement
// with our different cases (types)

export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) { 
        case types.BENCH_PLAYER:
            return {
                ...state,
                roster: {
                    ...state.roster,
                    starters: state.roster.starters.filter(item => {
                        return item.id !== payload.id
                    }),
                    benchPlayers: [...state.roster.benchPlayers, payload]
                }
            }  
        case types.PUT_IN_GAME:
            return {
                ...state,
                roster: {
                    ...state.roster,
                    starters: [...state.roster.starters, payload],
                    benchPlayers: state.roster.benchPlayers.filter(player => player.id !== payload.id)
                }
            }
        default:
            return state
    }
}