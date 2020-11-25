import React, { useEffect } from 'react';
import { Navbar } from '../Header';
import Style from './style';
import { Footer } from '../Footer/footer.js';



export const MessageRegistration = (props) => {

    const handleRedirect = () => {
        props.history.push("/verification")
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handleRedirect()
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    });

    return (
        <>
            <Navbar />
            <Style.MainMessageRegistration>
                <Style.DivRegistration>
                    <Style.TextRegistration>REGISTRATION</Style.TextRegistration>
                    <Style.Line></Style.Line>
                </Style.DivRegistration>
                <Style.ContentinerMessage>
                    <Style.ContentTextRegistration>
                        <Style.TextReg>
                            Thanks for your registration. Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys arent good in writing the message could end up in you junk folder. Our apologies for any inconvienience.thank for
                        </Style.TextReg>
                    </Style.ContentTextRegistration>
                </Style.ContentinerMessage>
            </Style.MainMessageRegistration>
            <Footer />
        </>
    )
}