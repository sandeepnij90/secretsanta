import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackWrapper = styled.h3`
    position: absolute;
    left: 10px;
    top: 10px;
    font-size: 24px;
    color: #ffffff;
    text-decoration: none;
`

const Back: FunctionComponent = () => {
    return (
        <Link to="/"><BackWrapper>Back to bethleham</BackWrapper></Link>
    )
}

export default Back;