import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Input, Container } from 'components/common'
import { useDispatch, useSelector } from 'react-redux'
import { getError } from 'store/Reducer'
import { withRouter, RouteComponentProps, Link } from 'react-router-dom'
import { resetError, login } from 'store/Actions'

const Button = styled.button`
    border: 0;
    padding: 15px;
    border-radius: 4px;
    margin-top: 15px;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 300px;
    justify-content: center;
`

const Error = styled.div`
    padding: 15px;
    text-align: center;
    background: #000000;
    color: #ffffff;
`

const LinkWrapper = styled.a`
    color: #ffffff;
    text-decoration: none;
` 


const SecretSanta: FunctionComponent<RouteComponentProps> = ({ history }) => {
    const [name, setName] = useState('')
    const [passcode, setPasscode] = useState(0)
    const dispatch = useDispatch()
    const [isAccepted, setIsAccepted] = useState(false)
    const errorMessage = useSelector(getError)
    // const errorMessage = 'You idiot! Try again.'

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
       const id = Math.floor(Math.random() * Math.floor(4))
       const errors = ['error 0', 'error 1', 'error2', 'error 3', 'error 4']
       return errors[id]
    }

    const CheckboxContainer = styled.div`
        display: grid;
        grid-template-columns: auto auto;
        grid-column-gap: 8px;
    `

    return (
        <Container>
            <Wrapper>
                <h1>Secret Santa</h1>
                <Input onChange={handleName} label="Enter your name"  id="names" list={['Sandeep Nijjar','Jasmeen Nijjar','Mama Elf', 'Papa Elf', 'Raminder Sandher', 'Hardeep Tawakley', 'Tarun Tawakley', 'Sandeep Cheema', 'Steve Cheema', 'Sahib Cheema', 'Veer Cheema', 'Ravinder Basra', 'Wandeep Basra', 'Kabir Basra', 'Sonam Basra', 'Kaira Basra']} />
                <Input onChange={handlePasscode} label="Enter your passcode" type="number" maxLength={4}/>
                {errorMessage.length ? <Error>{generateError()}</Error> : ''}
                <CheckboxContainer><input type="checkbox" id="tsandcs" onChange={handleTerms} checked={isAccepted} /> <label htmlFor="tsandcs">I have read and accepted the <Link to="/terms"><LinkWrapper>terms and conditions</LinkWrapper></Link></label></CheckboxContainer>
                <Button disabled={!isAccepted} onClick={handleCheck}>Login</Button>
            </Wrapper>
        </Container>
    )
}

export default withRouter(SecretSanta) 