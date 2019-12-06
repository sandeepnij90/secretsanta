import axios from 'axios'
import { Dispatch, Action } from 'redux'
import { ThunkAction } from 'redux-thunk'
import { AppState } from './Reducer'
import { RESET_ERROR, IUser, LOGIN, SET_MATCH } from './Types'


export const resetError = (dispatch: Dispatch) => {
    dispatch({ type: RESET_ERROR })
}


export const login = (data: {name: string, passcode: Number }, history: any): ThunkAction<void, AppState, null, Action<string>> => async (dispatch: Dispatch) => {
    const res = await axios.post('/api/login', data)
    dispatch({type: LOGIN, payload:{name: res.data.name, secretSantaFor: res.data.secretSantaFor, error: res.data.error}})
    if(!res.data.error) {
        history.push('/yourmatch')
    }
}

export const setMatch = (name: string): ThunkAction<void, AppState, null, Action<string>> => async(dispatch: Dispatch) => {
    const res = await axios.post('/api/setmatch', {name})
    dispatch({type: SET_MATCH, payload: {secretSantaFor: res.data}})
}