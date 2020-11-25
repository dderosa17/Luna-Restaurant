import styled from 'styled-components'

export const TextRegistration = styled.h1`
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
`

export const ButtonRegistration = styled.button`
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

export const TextRegistrationButton = styled.text`
    font-size: 20px;
    color:white;
`

export const InputEmailRegistration = styled.input`
    width:380px;
    height:45px;
    margin-top:3%;
    border: 1px solid #EBEBEB;
    outline:none;
    ::placeholder,
    ::-webkit-input-placeholder {
      font-size:20px;
      font-weight: bold;
    }
`

export const MainContainerRegistration = styled.section`
    display:flex;
    justify-content:center;
    background: #F2F2F2;
    height:80vh;
    width:100%;
    // border:solid 2px red;

`

export const ContainerRegistrationForm = styled.section`
    display:flex;
    flex-direction:column;
    height:100%;
    width:70%;
    // border: 2px solid yellow;

`
export const RegistrationMessage = styled.section`
    position:absolute;
    text-align:center;
    // z-idex:-2;
    margin-left:17%;
    background-color: #F2F2F2;
    margin-top:9%;
    height:30%;
    width:33%;
    // border:solid 2px blue;
`

export const DivRegistration = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    height:10%;
    width:100%;
    margin-top:2%;
    // border:solid 2px green;
`

export const Line = styled.line`
    border:3px solid #E47D31;
    width:110px;
    color:black;
`

export const DivEmailAddress = styled.div`
    display:flex;
    justify-content:center;
    // align-items:center;
    height:15%;
    width:100%;
    margin-top:1.5%;
    // border:solid 2px blue;
`

export const DivButtonRegister = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:10%;
    width:100%;
    margin-top:1.5%;
    // margin-top:2%;
    // border:solid 2px gray;
`



export default {
    TextRegistration, ButtonRegistration, TextRegistrationButton,
    InputEmailRegistration, MainContainerRegistration,
    ContainerRegistrationForm, DivRegistration, DivEmailAddress, DivButtonRegister, Line,
    RegistrationMessage,
}