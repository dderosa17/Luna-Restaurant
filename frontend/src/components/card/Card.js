import React from 'react'
import Star from '../../images/svg/star.svg'
import StarYellow from '../../images/svg/star_yellow.svg'
import { RestaurantWrapper, TopContainer, RatingContent } from './style'

const Rating = (props) => {
    return (<RatingContent>
        <img src={props.rating >= 1 ? StarYellow : Star}/>
        <img src={props.rating >= 2 ? StarYellow : Star}/>
        <img src={props.rating >= 3 ? StarYellow : Star}/>
        <img src={props.rating >= 4 ? StarYellow : Star}/>
        <img src={props.rating >= 5 ? StarYellow : Star}/>
    </RatingContent>);
};

const Card = (props) => {
    const restaurant = props.restaurant;
    return (
        <RestaurantWrapper>
            <TopContainer>
                <p>{restaurant.name}</p>
                <p>{restaurant.street}<br/></p> 
                <Rating rating={restaurant.average_rating.rating} />
            </TopContainer>
            <img src={restaurant.image} alt={restaurant.name} />
        </RestaurantWrapper>
    )
}

export default Card;
