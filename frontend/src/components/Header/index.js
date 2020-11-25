import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { MainContainer, LogoWrapper, SinUpButton, SinInButton, ContainerLink, ContainerButton, LinkPages, LogoLuna, SinOutButton } from './style'
import LOGO from '../../images/svg/logo.svg'
import { logoutAction } from '../../store/actions/logoutAction'

export const Navbar = withRouter((props) => {
    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutAction);
        props.history.push("/");
      };

    return (
        <MainContainer>
            <LogoWrapper>
                <LogoLuna src={LOGO}></LogoLuna>
            </LogoWrapper>

            <ContainerLink>
                <Link to='/homepage' style={{ textDecoration: "none" }} ><LinkPages>Home</LinkPages></Link>
                <Link to='/search' style={{ textDecoration: "none" }} ><LinkPages>Search</LinkPages></Link>
                <Link to='/profile' style={{ textDecoration: "none" }} ><LinkPages>Profile</LinkPages></Link>
            </ContainerLink>
            <ContainerButton>
                {
                !token && (<><Link to='/registration'><SinUpButton >SIGNUP</SinUpButton></Link>
                <Link to='/'><SinInButton >LOGIN</SinInButton></Link>
                </>)
                }
                {
                    token && <SinOutButton onClick={handleLogout}>LOGOUT</SinOutButton>
                }
                
                

            </ContainerButton>
        </MainContainer>

    )
})