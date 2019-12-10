import React, { FunctionComponent, Fragment } from 'react'
import styled from 'styled-components'
import { Container } from 'components/common'
import Back from 'components/Back'
const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
    margin-bottom: 64px;
    text-align: center;
`

const List = styled.ol`
    padding: 15px;
`

const ListItem = styled.li`
    margin-bottom: 24px;
`

const ImageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin-top: 16px;
`

const Image = styled.img`
    max-width: 100%;
`


const Terms: FunctionComponent = () => {
    return (
        <Fragment>
             <Back />
            <Container maxWidth={600}>
                <Heading>Secret Santa Rules</Heading>
                <List>
                    <ListItem>All parties over the age of 12 months, must partake in Secret Santa.If one party acts like the Grinch, The Christmas Party will be cancelled and all parties shall sit in the dark listening to the Bible on Audible. </ListItem>
                    <ListItem>Participants thereafter referred to as “Wisemen” are required to use the online form to select their name and enter their unique passcode. </ListItem>
                    <ListItem>All Wisemen will be given a unique passcode.This passcode must not be shared.If you want to break the rules, go ahead there is room on the naughty list. <ImageContainer><Image src="https://media.giphy.com/media/BWXvoAmEcCsJdTJga4/giphy.gif" /></ImageContainer> </ListItem>
                    <ListItem>The name drawn must remain a secret(and no you cant be your own secret santa!) and no you cannot start your own secret santa either!</ListItem>
                    <ListItem>It is the individuals responsibility to keep the name a secret forever! FOREVER!</ListItem>
                    <ListItem>Now for the good bit...the price of your gift must not exceed £1.00. (That’s one british pound in case you didn’t see the £).Knock yourself out!</ListItem>
                    <ListItem>But heres the catch...your gift must be something a Wiseman(the name you have drawn) can use in 2020!</ListItem>
                    <ListItem>Your gift should not be alive.</ListItem>
                    <ListItem>Your gift should not be dead.</ListItem>
                    <ListItem>Your gift cannot be a donation to the donkey sanctuary. </ListItem>
                    <ListItem>Your gift must be wrapped. </ListItem>
                    <ListItem>Your gift must have the Wiseman’s name on it.Remember handwriting can be a giveaway...</ListItem>
                    <ListItem>On arrival you must give your gift to Mary and Joseph who wll put it in the manger with the donkey.</ListItem>
                    <ListItem>All gifts MUST be received with gratitude.</ListItem>
                </List>
            </Container>
        </Fragment>
    )
}

export default Terms