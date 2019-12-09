import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Container, Input } from 'components/common'

const Team = styled.div`
    display: grid;
    justify-content: center;
`

const Teams = styled.div`
    display: grid;
    grid-template-columns 1fr 1fr 1fr;
`

const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
    margin-bottom: 64px;
    text-align: center;
`


const Quiz: FunctionComponent = () => {
    return (
        <Container maxWidth={500}>
            <div>
                <Heading>Quiz</Heading>
            <Teams>
            <Team>
            <h2>Team 1</h2>
            <ol>
                <li>Dad</li>
                <li>Ravi</li>
                <li>Kaira</li>
                <li>Tarun</li>
                <li>Sonam</li>
            </ol>
            </Team>
            <Team>
            <h2>Team 2</h2>
            <ol>
                <li>Mum</li>
                <li>Sandy</li>
                <li>Wand</li>
                <li>Kabir</li>
                <li>Rim</li>
            </ol>
            </Team>

            <Team>
            <h2>Team 3</h2>
            <ol>
                <li>Sahib</li>
                <li>Veer</li>
                <li>Hardeep</li>
                <li>Jia</li>
                <li>Steve</li>
            </ol>
            </Team>
            </Teams>
            </div>
            
            <h1>Quiz rules</h1>
        </Container>
    )
}

export { Quiz }
 


