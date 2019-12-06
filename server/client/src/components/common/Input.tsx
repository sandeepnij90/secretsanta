import React, { FunctionComponent, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
    grid-flow: row;
    justify-content: center;
    grid-template-columns: 1fr;
    margin-bottom: 15px;
`

const InputWrapper = styled.input`
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border-radius: 4px;
`


interface IProps {
    type?: 'text' | 'password' | 'number'
    placeholder?: string
    label: string
    maxLength?: number
    id?: string
    list?: any
    onChange: any
}

const Input: FunctionComponent<IProps> = ({ type, placeholder, label, maxLength, id, list, onChange }) => {

    const [showList, setShowList] = useState(false)

    const renderList = () => {
        return list.map((name: string) => <option key={name} value={name}></option>)
    }

    const handleOnChange = (e: any) => {
        onChange(e.target.value)
        if (e.target.value.length >= 2) {
           return  setShowList(true)
        }
        setShowList(false)
    }
    
    return (
        <Wrapper>
            <label>{label}</label>
            <InputWrapper type={type} placeholder={placeholder} maxLength={maxLength} list={id} autoComplete="off" onChange={handleOnChange}/>
            {list && showList && (
                <datalist id={id}>
               {renderList()}
                </datalist>
            )}
    
        </Wrapper>
    )
}

export { Input }