import React, { FunctionComponent, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import { getName, getSecretSantaFor } from 'store/Reducer'
import { setMatch } from 'store/Actions'
import styled from 'styled-components'

const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
`

const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
`


const YourMatch: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const dispatch = useDispatch()
    const name = useSelector(getName)
    const secretSantaFor = useSelector(getSecretSantaFor)

    useEffect(() => {   
        dispatch(setMatch(name))
    }, [])

    return (
    <Container>
            <div>
            <Heading>You are buying a gift for:</Heading>
            <Heading> Jasmeen Nijjar{secretSantaFor}</Heading>
                <p>Remember it's <strong>SECRET</strong> Santa</p>
            </div>
    </Container>
    )
}
export default withRouter(YourMatch)