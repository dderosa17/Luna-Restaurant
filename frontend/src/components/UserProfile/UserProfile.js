import styled from 'styled-components'
import { Navbar } from '../Header'
import { Footer } from '../Footer/footer.js';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import ProfileBackground from '../../images/profile-background.jpeg'
import { getMyProfileAction } from '../../store/actions/profileAction';

const MainContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items: flex-start;
    background: #F2F2F2;
    height:80vh;
    width:100%;
    background-image: url("paper.gif");
    border:solid 2px red;
    . background {
        position:absolute;
        top:0;
        left:0;
    }
// const ContentsContainer = styled.div`
//     overflow: visible
//     display:flex;
//     height:100%;
//     width:80%;
//     border: 2px solid green;
// `

const Profile = (props) => {
    return (
        <div>
            {props.profile.username}
        </div>
    );
};

export function UserProfile(props) {
    const profile = useSelector((state) => state.profile);
    const profileIsEmpty = profile.username == undefined;
    const dispatch = useDispatch();
    useEffect(() => {
        if (profileIsEmpty) {
            dispatch(getMyProfileAction);
        }
    }, []);


    return (
        <>
            <Navbar />
            <MainContainer>
                {/* <img className="background" src={ProfileBackground} alt="" /> */}
                {/* <ContentsContainer> */}
                {profileIsEmpty && <p>Loading my profile...</p>}
                {!profileIsEmpty && <Profile profile={profile} />}
                {/* </ContentsContainer> */}
            </MainContainer>
            <Footer />
        </>
    )
}