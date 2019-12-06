import React, { FunctionComponent } from 'react'
import styled from 'styled-components'


const ContainerWrapper = styled.div<IProps>`
    width: 100%;
    max-width: ${props => props.maxWidth && `${props.maxWidth}px`}
    margin: auto;
    display: grid;
    justify-content: center;
    height: 100%;
    align-items: center;
`

interface IProps {
    maxWidth?: number
}

const Container: FunctionComponent<IProps> = ({children, maxWidth=960}) => {
    return (
        <ContainerWrapper maxWidth={maxWidth}>
            {children}
        </ContainerWrapper>
    )
} 

export { Container }