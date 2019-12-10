import React, { FunctionComponent, useState, useEffect, Fragment } from 'react'
import styled from 'styled-components'
import { Input, Container } from 'components/common'
import { useDispatch, useSelector } from 'react-redux'
import { getError } from 'store/Reducer'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { resetError, login } from 'store/Actions'
import Back from 'components/Back'

const Button = styled.button`
    // border: 0;
    // padding: 15px;
    // border-radius: 4px;
    // margin-top: 15px;
    ${props => props.disabled &&`
        background: #ccc;
    `}

    padding: 10px;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    color: ;
    #ffffff: ;
    -webkit-text-decoration: none;
    text-decoration: none;
    -webkit-transition: 0.7s;
    transition: 0.7s;
    font-size: 16px;
`

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
`

const Error = styled.div`
    padding: 15px;
    text-align: center;
    background: #000000;
    color: #ffffff;
`

const StyledLink = styled(Link)`
    color: #ffffff;
    font-weight: 700;
    font-size: 22px;
` 

const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
    margin-bottom: 64px;
`

const CheckboxContainer = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 8px;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
`


const SecretSanta: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const [name, setName] = useState('')
    const [passcode, setPasscode] = useState(0)
    const dispatch = useDispatch()
    const [isAccepted, setIsAccepted] = useState(false)
    const errorMessage = useSelector(getError)
    const [customError, setCustomError]= useState('')
    const handleName = (enteredName: string) => {
        setName(enteredName)
        dispatch(resetError)
    }

    const handlePasscode = (enteredPasscode: number) => {
        setPasscode(enteredPasscode)
        dispatch(resetError)
    }

    const handleCheck = () => {
        dispatch(login({name, passcode}, history))
        console.log('handle check')
    }

    const handleTerms = () => {
        setIsAccepted(!isAccepted)
    }

    const generateError = () => {
       const id = Math.floor(Math.random() * Math.floor(3))
        const errors = ["Jesus Christ I hope you are not on my team! Try again.", "I thought you were smarter than this! Try again", "We take bribes this will cost you - try again."]
       return errors[id]
    }

    return (
        <Fragment>
            <Back />
            <Container maxWidth={600}>
                <Wrapper>
                    <Heading>Secret Santa</Heading>
                    <Input onChange={handleName} label="Enter your name"  id="names" list={['Sandeep Nijjar','Jasmeen Nijjar','Mama Elf', 'Papa Elf', 'Raminder Sandher', 'Hardeep Tawakley', 'Tarun Tawakley', 'Sandeep Cheema', 'Steve Cheema', 'Sahib Cheema', 'Veer Cheema', 'Ravinder Basra', 'Wandeep Basra', 'Kabir Basra', 'Sonam Basra', 'Kaira Basra']} />
                    <Input onChange={handlePasscode} label="Enter your passcode" type="number" maxLength={4}/>
                    {errorMessage.length ? <Error>{generateError()}</Error> : ''}
                    <CheckboxContainer><input type="checkbox" id="tsandcs" onChange={handleTerms} checked={isAccepted} /> <label htmlFor="tsandcs">I have read the <StyledLink to="/terms">very important rules</StyledLink></label></CheckboxContainer>
                    <Button disabled={!isAccepted} onClick={handleCheck}>Tell me the name</Button>
                </Wrapper>
            </Container>
        </Fragment>

    )
}

export default withRouter(SecretSanta) 