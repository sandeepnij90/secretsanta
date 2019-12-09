import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import { Container } from 'components/common'

const Heading = styled.h1`
    font-weight: 200;
    letter-spacing: 2px;
    font-size: 54px;
    font-family: 'Permanent Marker', cursive;
    line-height: 64px;
    margin-bottom: 64px;
`

const Terms: FunctionComponent = () => {
    return (
        <Container maxWidth={600}>
            <Heading>Secret Santa Rules</Heading>
            <ol>
                <li>All parties over the age of 12 months, must partake in Secret Santa.If one party acts like the Grinch, The Christmas Party will be cancelled and all parties shall sit in the dark listening to the Bible on Audible. </li>
                <li>Participants thereafter referred to as “Wisemen” are required to use the online form to select their name and enter their unique passcode. </li>
                <li>All Wisemen will be given a unique passcode.This passcode must not be shared.If you want to break the rules, go ahead there is room on the naughty list.</li>
                <li>The name drawn must remain a secret(and no you cant be your own secret santa!) and no you cannot start your own secret santa either!</li>
                <li>It is the individuals responsibility to keep the name a secret forever! FOREVER!</li>
                <li>Now for the good bit...the price of your gift must not exceed £1.00. (That’s one british pound in case you didn’t see the £).Knock yourself out!</li>
                <li>But heres the catch...your gift must be something a Wiseman(the name you have drawn) can use in 2020!</li>
                <li>Your gift should not be alive.</li>
                <li>Your gift should not be dead.</li>
                <li>Your gift cannot be a donation to the donkey sanctuary. </li>
                <li>Your gift must be wrapped. </li>
                <li>Your gift must have the Wiseman’s name on it.Remember handwriting can be a giveaway...</li>
                <li>On arrival you must give your gift to Mary and Joseph who wll put it in the manger with the donkey.</li>
                <li>All gifts MUST be received with gratitude.</li>
            </ol>

        </Container>
    )
}

export default Terms