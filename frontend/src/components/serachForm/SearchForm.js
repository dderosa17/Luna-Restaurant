import React, {Fragment, useState} from 'react'
import {FormWrapper, SearchBox, DropDownButton, Button, Input } from './style'
import ArrowIcon from '../../images/svg/arrow.svg'

const SearchForm = () => {

    const [open, setOpen] = useState(false);
    const [select, setSelect] = useState([]);

    return (
        <Fragment>
            <FormWrapper>
                <Input type='text' placeholder='Search' />
                <Button>
                    <span>Select a category...</span>
                    <img src={ArrowIcon} onClick={() => setOpen(!open)} />
                    {/*<DropDown>
                     </DropDown>*/}
                </Button>
            </FormWrapper>
        </Fragment>
    )
}

export default SearchForm
