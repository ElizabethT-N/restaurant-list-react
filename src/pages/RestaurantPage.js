import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectRestaurantById } from "../restaurants/restaurantSlice";  // Ensure this import is correct
import RestaurantDetail from "../restaurants/RestaurantDetails";

const RestaurantPage = () => {
    const { restaurantId } = useParams();
    const restaurant = useSelector(selectRestaurantById(restaurantId));
    console.log('restaurantId:', restaurantId);
    console.log('restaurant:', restaurant);

    if (!restaurant) {
        return <p>Restaurant not found. ID: {restaurantId}</p>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Restaurant Details</h2>
            <RestaurantDetail restaurant={restaurant} />
        </div>
    );
};

export default RestaurantPage;