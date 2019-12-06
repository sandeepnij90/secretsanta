import React, { FunctionComponent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { getName, getSecretSantaFor } from 'store/Reducer'
import { setMatch } from 'store/Actions'

const YourMatch: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const name = useSelector(getName)
    const secretSantaFor = useSelector(getSecretSantaFor)

    useEffect(() => {   
        dispatch(setMatch(name))
    }, [])

    return (
    <h1>Your match: {secretSantaFor}</h1>
    )
}
export default withRouter(YourMatch)