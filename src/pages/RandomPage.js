import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../restaurants/restaurantSlice";

export default function RandomPage() {

    const restaurantList = useSelector(selectAllRestaurants);
    const randomRestaurant = restaurantList[ Math.floor(Math.random() * restaurantList.length) ];
    return (
        <div>
            <h5>You should eat...</h5>
            <h2 className="display-1">{ randomRestaurant.name }</h2>
        </div>
    );
};