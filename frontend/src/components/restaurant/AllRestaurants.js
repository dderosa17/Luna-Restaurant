import { RestaurantsList } from "./RestaurantsList";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import { getAllRestaurantsAction } from "../../store/actions/restaurantAction";

export const AllRestaurants = (props) => {
    const restaurants = useSelector((state) => state.restaurants.all_restaurants);
    const dispatch = useDispatch();
    useEffect(() => {
        if (restaurants == null) {
            dispatch(getAllRestaurantsAction);
        }
    }, []);

    if (restaurants == null) {
        return <p>Loading restaurants...</p>;
    }

    console.log("rest", restaurants);

    return (<RestaurantsList restaurants={restaurants} />);
}