import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Container, Input } from 'components/common'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    text-align: center;
`

const InputWrapper = styled.div`
    margin-top: 36px;
`

const ButtonContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
`
const Button = styled.div`
    padding: 10px;
    margin: 10px;
    background-color:blue;
    text-align: center;
    color; #ffffff;
    text-decoration:none;
    &:hover {
        background: green;
    }
`


const Landing: FunctionComponent = () => {
    return (
        <Container maxWidth={480}>
            <Wrapper>
            <h1>Landing page</h1>
            <ButtonContainer>
                <Link to="/secretsanta"><Button>Secret Santa</Button></Link>
                <Link to="/quiz"><Button>Quiz</Button></Link>
                <Link to="/"><Button>Something else</Button></Link>
            </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export { Landing }