import React from 'react';
import {BodyContainer, Title, HorizontalLine, RestaurantsListing} from './style'
import Card from '../card/Card'


const BestRatedRestaurant = ({restaurant}) => {
    
    return (
        <BodyContainer>
            <Title>BEST RATED RESTAURANT</Title>
            <HorizontalLine />
            <RestaurantsListing>
            <Card />
            </RestaurantsListing>
        </BodyContainer>
    )
}

export default BestRatedRestaurant;
