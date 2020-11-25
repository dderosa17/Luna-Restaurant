import React, { Fragment } from 'react'
import { Navbar } from '../Header/index';
import { BodyContainer, HorizontalLine, TtitleContent, LinkPages } from './style'
import SearchForm from '../serachForm/SearchForm';
import Card from '../card/Card'
import { Link } from 'react-router-dom'
import { Footer } from '../Footer/footer.js';
import { RestaurantsList } from '../restaurant/RestaurantsList';
import { AllRestaurants } from '../restaurant/AllRestaurants';


const Restaurants = () => {
    return (
        <Fragment>
            <Navbar />
            <SearchForm />
            <BodyContainer>
                <TtitleContent>
                    <Link to='/search' style={{ textDecoration: "none" }}><LinkPages>RESTAURANTS</LinkPages></Link>
                    <Link to='/search/reviews' style={{ textDecoration: "none" }}><LinkPages>REVIEWS</LinkPages></Link>
                    <Link to='/search/users' style={{ textDecoration: "none" }}><LinkPages>USERS</LinkPages></Link>
                </TtitleContent>
                <HorizontalLine />
                <AllRestaurants />
            </BodyContainer>
            <Footer />
        </Fragment>
    )
}

export default Restaurants;
