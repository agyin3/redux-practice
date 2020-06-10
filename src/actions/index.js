import * as types from '../types'

export const benchPlayer = player => {
    // whenever we dispatch an action
    // it should always be an object 
    // with a type and payload
    // EX: {type: someType, payload: somePayload}
    return {
        type: types.BENCH_PLAYER,
        payload: player
    }
}

export const startPlayer = player => {
    return {
        type: types.PUT_IN_GAME,
        payload: player
    }
}