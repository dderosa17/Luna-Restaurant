import React, { useState } from 'react';
import Style from './style';
import { Navbar } from '../Header';
import { Footer } from '../Footer/footer.js';
import baseUrl from '../../helpers/baseUrl'

export const Verification = (props) => {
    const [email, setEmail] = useState("");
    const [validationCode, setValidationCode] = useState();
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setReapeatPassword] = useState("");

    const handleEmail = (e) => {
        setEmail(e.currentTarget.value);
    }

    const handleValidationCode = (e) => {
        setValidationCode(e.currentTarget.value)
    }

    const handleUsername = (e) => {
        setUsername(e.currentTarget.value)
    }

    const handleLocation = (e) => {
        setLocation(e.currentTarget.value)
    }

    const handlePassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    const handleRepeatPassword = (e) => {
        setReapeatPassword(e.currentTarget.value)
    }

    const handleFinishRegistration = () => {

        const body = JSON.stringify({ email: email, code: validationCode, first_name: repeatPassword, last_name: location, username: username, password: password, })
        const headers = new Headers({
            "Content-type": "application/json"
        })

        const config = {
            method: "PATCH",
            body: body,
            headers: headers,
        }

        fetch(`${baseUrl}/backend/api/auth/registration/validate/`, config)
            .then(response => {
                if (response.ok) {
                    props.history.push("/")
                    return response.json();
                } else throw new Error("validation not done")
            })
            .then(data => {
                console.log("in data respone", data);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // console.log(repeatPassword);
    return (
        <>
            <Navbar />
            <Style.MainVerification>
                <Style.ContainerVerificationForm>
                    <Style.DivVerificationText>
                        <Style.TextVerification>VERIFICATION</Style.TextVerification>
                        <Style.Line></Style.Line>
                    </Style.DivVerificationText>
                    <Style.ContentForm>
                        <Style.ContentFormLeftSide>
                            <Style.ContainerInputFieldsLeft>
                                <Style.InputEmailVerification type="email" placeholder="E-Mail address" onChange={handleEmail} />
                                <Style.InputUserNameVerification type="text" placeholder="Username" onChange={handleUsername} />
                                <Style.InputUsernameVerification type="password" placeholder="Password" onChange={handlePassword} />
                            </Style.ContainerInputFieldsLeft>
                        </Style.ContentFormLeftSide>
                        <Style.ContentFormRightSide>
                            <Style.ContainerInputFieldsRight>
                                <Style.InputVerificationCode type="text" placeholder="Validation code" onChange={handleValidationCode} />
                                <Style.InputLocationVerification type="text" placeholder="Last Name" onChange={handleLocation} />
                                <Style.InputPswRepeatVerification type="text" placeholder="First Name" onChange={handleRepeatPassword} />
                            </Style.ContainerInputFieldsRight>
                        </Style.ContentFormRightSide>
                    </Style.ContentForm>
                    <Style.ContentButtonFinishVerification>
                        <Style.ButtonVerificationFinish onClick={handleFinishRegistration}>Finish Registration</Style.ButtonVerificationFinish>
                    </Style.ContentButtonFinishVerification>
                </Style.ContainerVerificationForm>
            </Style.MainVerification>
            <Footer />
        </>
    )
}