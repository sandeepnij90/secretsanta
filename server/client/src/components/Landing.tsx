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
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 200px;
    @media screen and (min-width: 490px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`
const Button = styled.div`
    padding: 10px;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    color; #ffffff;
    text-decoration:none;
    transition: 0.7s;

    &:hover {
        background: #000000;
        color: #ffffff;
    }
`

const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000000;
    font-family: 'Permanent Marker', cursive;
`

const TextWrapper = styled.div`
    margin: 64px 0;
`

const Landing: FunctionComponent = () => {
    return (
        <Container maxWidth={600} marginTop={96}>
            <Wrapper>
                <Heading>Merry Christmas you filthy animal!</Heading>
                <p>Welcome to the Nijjar's Christmas party, hosted by Joesph &amp; Mary Nijjar in the little town of Bethlehem.</p>
                <TextWrapper>
                    <p>Remember...</p>
                    <p>Space for two reindeers only - so sleigh pool. 🦌 🦌</p>
                    <p>Christmas carolling - rehearse verses for ‘Little Donkey’. 🐴</p>
                    <p>Christmas quiz - study your bibles (new testament)📚 🙏🏾</p>
                    <p>Secret Santa - details below. 🧝‍♂ 🧝‍♀</p>
                    <p>Strictly NO Grinch’s allowed 🙅🏽‍♀ 🎄</p>
                    <p>Bring your festive cheer, frankincense and your ladoo! 🌕🎄 🎁 </p>
                    <p>Dress code: Santa Kurta optional 🎅</p>
                </TextWrapper>





            <ButtonContainer>
                <StyledLink to="/secretsanta" className="no-link"><Button>Secret Santa</Button></StyledLink>
                <StyledLink to="/quiz" className="no-link"><Button>Quiz</Button></StyledLink>
                <StyledLink to="/" className="no-link"><Button>Something else</Button></StyledLink>
            </ButtonContainer>
            </Wrapper>
        </Container>
    )
}

export { Landing }