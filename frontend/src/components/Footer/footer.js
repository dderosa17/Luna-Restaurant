import React from 'react';
import { FooterContainer, SectionUp, LeftSide, RightSide, TwitterButton, FacebookButton, GoogleButton, InstagramButton } from './style';
import TWITTER from '../../images/svg/twitter.svg';
import FB from '../../images/svg/facebook.svg';
import GOOGLE from '../../images/svg/googleplus.svg';
import INSTAGRAM from '../../images/svg/instagram.svg';


export const Footer = () => {
    return (
        <FooterContainer>
            <SectionUp>
                <LeftSide>
                    <a>About Us</a>
                    <a>Press</a>
                    <a>Blog</a>
                    <a>iOS</a>
                    <a>Android</a>
                </LeftSide>
                <RightSide>
                    <TwitterButton src={FB}></TwitterButton>
                    <FacebookButton src={TWITTER}></FacebookButton>
                    <GoogleButton src={GOOGLE}></GoogleButton>
                    <InstagramButton src={INSTAGRAM}></InstagramButton>
                </RightSide>
            </SectionUp>
        </FooterContainer>
    )
}
