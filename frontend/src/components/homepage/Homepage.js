import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { HomepageContainer, BestRestaurantsContainer } from './style'
import { Navbar } from '../Header'
import SearchForm from '../serachRestaurant/SearchRestaurant'
//import BestRatedRestaurant from '../bestRatedRestaurant/BestRatedRestaurant';
import { RestaurantsList } from '../restaurant/RestaurantsList';
import { Footer } from '../Footer/footer';
import { getBestRestaurantsAction } from "../../store/actions/restaurantAction";


const Homepage = (ß) => {

    const restaurants = useSelector((state) => state.restaurants.best_restaurants);
    const dispatch = useDispatch();

    useEffect(() => {

        if (restaurants == null) {
            dispatch(getBestRestaurantsAction);
        }
    }, []);

    if (restaurants == null) {
        return <p>Loading restaurants...</p>;
    }

    return (
        <HomepageContainer>
            <Navbar />
            <SearchForm />
            {/* <BestRatedRestaurant /> */}
            <BestRestaurantsContainer>
                <RestaurantsList restaurants={restaurants} />
            </BestRestaurantsContainer>
            <Footer />
        </HomepageContainer>
    )
}


export default Homepage;
