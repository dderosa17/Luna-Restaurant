import React from 'react'
import {SearchFormWrapper, FormWrapper, InputContainer, Button } from './style'

const SearchForm = () => {

    const handleClick = (e) => {
        e.preventDefault();
        console.log('test')
    }

    return (
        <SearchFormWrapper>
            <FormWrapper>
                <InputContainer>
                    <input type='text' placeholder='Search...' />
                    <Button onClick={handleClick}>Search</Button>
                </InputContainer>
            </FormWrapper>
        </SearchFormWrapper>
    )
}

export default SearchForm;
