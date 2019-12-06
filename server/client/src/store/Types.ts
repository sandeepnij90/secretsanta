export const LOGIN = 'LOGIN'
export const RESET_ERROR = 'RESET_ERROR'
export const SET_MATCH = 'SET_MATCH'

export interface IUser{
    name: string
    passcode: string
    secretSantaFor?: string
    error: string
}

export interface ILoginAcion {
    type: typeof LOGIN,
    payload: IUser
}

export type ActionTypes = ILoginAcion