import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BackWrapper = styled.h3`
    position: relative;
    left: 10px;
    top: 10px;
    font-size: 24px;
    color: #ffffff;
    text-decoration: none;
`
const StyledLink = styled(Link)`
    text-decoration: none;
`

const Back: FunctionComponent = () => {
    return (
        <StyledLink to="/"><BackWrapper>Back to bethleham</BackWrapper></StyledLink>
    )
}

export default Back;