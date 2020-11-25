import React, { Fragment } from 'react'
import { Navbar } from '../Header/index'
import SearchForm from '../serachForm/SearchForm';
import { Link } from 'react-router-dom'
import { TtitleContent, CommentWrapper, Text, Image, TopContainer, LinkPages, BodyContainer, HorizontalLine, UsersComments } from './style'
import { Footer } from '../Footer/footer.js';

const UsersPage = () => {
    return (
        <Fragment>
            <Navbar />
            <SearchForm />
            <BodyContainer>
                <TtitleContent>
                    <Link to='/search' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/search/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <UsersComments>
                    <CommentWrapper>
                        <TopContainer>
                            <Image>IMG</Image>
                            <h4>Name and Surname</h4>
                            <p>Reviews in total</p>
                        </TopContainer>
                        <Text>
                            <p>Comment Text...</p>
                        </Text>
                    </CommentWrapper>
                </UsersComments>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default UsersPage;
