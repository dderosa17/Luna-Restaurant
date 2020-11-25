import styled from "styled-components"
import Card from "../card/Card"

const RestaurantsListRaw = (props) => {
    return (<div>
        {props.restaurants.map((restaurant) => <Card key={restaurant.id} restaurant={restaurant} />)}
    </div>);
}

export const RestaurantsList = styled(RestaurantsListRaw)`
    display: grid
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 30px;
    background-color:yellow;
    
`;