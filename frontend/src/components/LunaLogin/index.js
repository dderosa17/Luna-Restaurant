import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Style from './style';
import { Navbar } from '../Header';
import { Footer } from '../Footer/footer.js';
import { USER_LOGIN } from '../../store/actions/actionTypes';
import baseUrl from '../../helpers/baseUrl'



export const Login = (props) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailOnChangeHandler = (e) => {
        setEmail(e.currentTarget.value);
    }

    const passwordOnChangeHandler = (e) => {
        setPassword(e.currentTarget.value);
    }

    const loginHandler = () => {
        const headers = new Headers({
            "Content-type": "application/json"
        })
        const body = JSON.stringify({ email: email, password: password });
        const config = {
            method: "POST",
            body: body,
            headers: headers,
        }

        fetch(`${baseUrl}/backend/api/auth/token/`, config)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error("Unauthorized")
                }
            })
            .then(data => {
                console.log("in my data", data)
                if (data.access) {
                    const token = data.access;
                    dispatch({ type: USER_LOGIN, payload: token })

                    props.history.push("/homepage")

                }
            })
            .catch(error => {
                console.log(error)
            })
    }

    // console.log(email);

    return (
        <>
            <Navbar />
            <Style.ContainerLogin>
                <Style.ContentLoginForm>
                    <Style.ContentWriteLogin>
                        <Style.TextLogin>LOGIN</Style.TextLogin>
                        <Style.Line />
                    </Style.ContentWriteLogin>
                    <Style.ContainerInput>
                        <Style.InputUserNameLogin type="text" placeholder="Email" onChange={emailOnChangeHandler} />
                        <Style.InputPasswordLogin type="password" placeholder="Password" onChange={passwordOnChangeHandler} />
                    </Style.ContainerInput>
                    <Style.ContainerButtonLogin>
                        <Style.ButtonLogin value="Login" onClick={loginHandler}>
                            <Style.TextLoginButton>Login</Style.TextLoginButton>
                        </Style.ButtonLogin>
                    </Style.ContainerButtonLogin>
                </Style.ContentLoginForm>
            </Style.ContainerLogin>
            <Footer />
        </>


    )

}