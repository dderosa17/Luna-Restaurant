import styled from 'styled-components';

const ContainerLogin = styled.section`
    width:100%;
    height:80vh;
    justify-content: center;
    background-color: #F2F2F2;
    // border:solid 2px red;
`

const ContentLoginForm = styled.section`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:60%;
    width:100%;
    // border:solid 2px yellow;

`

const ContentWriteLogin = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height:20%;
    width:100%;
    // border:solid 2px blue;
`

const TextLogin = styled.p`
    font-family: Helvetica;
    // font-style: normal;
    font-weight: bold;
    font-size: 24px;
`
const Line = styled.line`
    border:3px solid #E47D31;
    width:110px;
`

const ContainerInput = styled.section`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    height:60%;
    width:100%;
    // border:solid 2px black;
`

const InputUserNameLogin = styled.input`
    width:380px;
    height:45px;
    // margin-top:3%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`

const InputPasswordLogin = styled.input`
    width:380px;
    height:45px;
    margin-top:1%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`


const ButtonLogin = styled.button`
    height:56px;
    width:190px;
    border-radius:28px;
    background-color: #E47D31;
    outline:none;
    border:transparent;
    cursor:pointer;
    &:hover{
        // background-color: red;
    }
`

const TextLoginButton = styled.text`
    font-size: 20px;
    color:white;
`

const ContainerButtonLogin = styled.div`
    display:flex;
    justify-content: center;
    // align-items:center;
    height:20%;
    width:40%;
    // border:solid 2px blue;
`

export default {
    ButtonLogin, ContainerLogin, ContentLoginForm,
    ContentWriteLogin, TextLogin, Line, ContainerInput, InputUserNameLogin, InputPasswordLogin,
    TextLoginButton, ContainerButtonLogin
}