import styled from 'styled-components';
import background from '../../images/cover-image.png'

export const SearchFormWrapper = styled.div `
    background-image: url(${background});
    background-color: rgba(0, 0, 0, 0.35);
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: row;
    height: 351px;
    width: 100%;
`;

export const FormWrapper = styled.div `
    display: inline-block;
`;

export const InputContainer = styled.form `
    display: flex;
    aliign-items: center;
    justify-content: center;

    input[type=text] {
        width: 530px;
        heigt: 55px;
        border-radius: 3px;
        color: #4C4C4C;
        outline: none;
        margin-top: 148px;
        margin-left: 343px;
        border: none;
    }
    input:focus {
        outline: none;
    }
    input::-webkit-input-placeholder {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 20px;
        color: #4C4C4C;
        padding: 17px;
    }

`;

export const Button = styled.button `
    background-color: #E47D31;
    border-radius: 28px;
    color: white;
    width: 200px;
    height: 58px;
    border: none;
    margin-left: 25px;
    margin-top: 147px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    cursor: pointer;
    outline: none;
`;