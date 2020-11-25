import React, { Fragment } from 'react'
import { Navbar } from '../Header/index'
import SearchForm from '../serachForm/SearchForm'
import { ReviewsContainer, HorizontalLine, BodyContainer, ReviewCardWrapper, ButtonLike, ButtonComment } from './style'
import { TtitleContent, LinkPages, TopContainer, ReviewContent, Image, LikeCommentButton, CommentsArea, CommentsInfo } from './style'
import { Link } from 'react-router-dom';
import { Footer } from '../Footer/footer.js';


const ReviewsPage = () => {
    return (
        <Fragment>
            <Navbar />
            <SearchForm />
            <BodyContainer>
                <TtitleContent>
                    <Link to='/search' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/search/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <ReviewsContainer>

                    <ReviewCardWrapper>
                        <TopContainer>
                            <Image>IMG</Image>
                            <h4>Name and Surname</h4>
                            <p>Reviews in total</p>
                        </TopContainer>
                        <ReviewContent>
                            <h5>Customer Name</h5>
                            <p>Review Text......</p>
                        </ReviewContent>
                        <LikeCommentButton>
                            <ButtonLike>Like 0</ButtonLike>
                            <ButtonComment>Comment 0</ButtonComment>
                        </LikeCommentButton>
                        <CommentsArea>
                            <h3>Latest Comments</h3>
                            <h5>User Name</h5>
                            <p>Comment......</p>
                        </CommentsArea>
                    </ReviewCardWrapper>

                </ReviewsContainer>
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default ReviewsPage;
