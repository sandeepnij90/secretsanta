import React, { FunctionComponent } from 'react'
import styled from 'styled-components'


const ContainerWrapper = styled.div<IProps>`
    width: 100%;
    max-width: ${props => props.maxWidth && `${props.maxWidth}px`}
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    margin-top: ${props => props.marginTop && `${props.marginTop}px`}
    box-sizing: border-box;
    padding 15px; //watch this space;
    min-height: 100%;
`

interface IProps {
    maxWidth?: number
    marginTop?: number
}

const Container: FunctionComponent<IProps> = ({children, maxWidth=960, marginTop=0}) => {
    return (
        <ContainerWrapper maxWidth={maxWidth} marginTop={marginTop}>
            {children}
        </ContainerWrapper>
    )
} 

export { Container }