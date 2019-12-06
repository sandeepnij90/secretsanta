import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Container, Input } from 'components/common'


const Quiz: FunctionComponent = () => {
    return (
        <Container>
            <h1>Teams</h1>
            <h2>Team 1</h2>
            <ol>
                <li>Dad</li>
                <li>Ravi</li>
                <li>Kaira</li>
                <li>Tarun</li>
                <li>Sonam</li>
            </ol>
            <h2>Team 2</h2>
            <ol>
                <li>Mum</li>
                <li>Sandy</li>
                <li>Wand</li>
                <li>Kabir</li>
                <li>Rim</li>
            </ol>
            <h2>Team 3</h2>
            <ol>
                <li>Sahib</li>
                <li>Veer</li>
                <li>Hardeep</li>
                <li>Jia</li>
                <li>Steve</li>
            </ol>
        </Container>
    )
}

export { Quiz }
 


