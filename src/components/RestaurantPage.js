import { useParams } from "react-router-dom";

export default function RestaurantPage({ restaurantList }) {
    let { restaurantId } = useParams();
    restaurantId = parseInt(restaurantId);
    console.log(restaurantList); // Check the value of restaurantList
    const restaurant = restaurantList.find(r => r.id === restaurantId);

    if (!restaurant) {
        return <h2>Restaurant Not Found </h2>;
    }
    return (
        <div>
            <h3>{ restaurant.name }</h3>
            <p>{ restaurant.category }</p>
            <p>{ restaurant.type }</p>
            <p>{ restaurant.rating }</p>
        </div>
    )
}