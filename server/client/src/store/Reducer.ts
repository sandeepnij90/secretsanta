import { LOGIN, RESET_ERROR, SET_MATCH, ActionTypes } from './Types'

interface IState  {
    name: any
    secretSantaFor: string
    error: string
    
}

const initState: IState = {
    name: false,
    secretSantaFor: '',
    error: '',
}

export const Reducer = (state = initState, action: ActionTypes) => {
    switch(action.type as any) {
        case LOGIN: {
            return {...state, name: action.payload.name, secretSantaFor: action.payload.secretSantaFor, error: action.payload.error }
        }
        case RESET_ERROR: {
            return {...state, error: ''}
        }
        case SET_MATCH : {
            return {...state, secretSantaFor: action.payload.secretSantaFor}
        }
        default: return state
    }
}

export const getName = (state: IState) => state.name
export const getError = (state: IState) => state.error
export const getSecretSantaFor = (state: IState) => state.secretSantaFor

export type AppState = ReturnType<typeof Reducer>
