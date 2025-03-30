import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

export default function HomePage({ restaurantList }) {
const [restaurantFilter, setRestaurantFilter] = useState("All")

let filteredRestaurants
if (restaurantFilter === "All") {
    filteredRestaurants = restaurantList
} else {
    filteredRestaurants = restaurantList.filter(
    restaurant => restaurant.category === restaurantFilter
    )
}

return (
    <div>
        <div>
            <button
            className="btn btn-primary me-2"
            onClick={() => setRestaurantFilter("All")}
            >
            All
            </button>
            <button
            className="btn btn-primary me-2"
            onClick={() => setRestaurantFilter("By-Plate")}
            >
            By-Plate
            </button>
            <button
            className="btn btn-primary me-2"
            onClick={() => setRestaurantFilter("All-You-Can-Eat")}
            >
            All-You-Can-Eat
            </button>
        </div>
        {filteredRestaurants.map(r => (
        <RestaurantCard restaurant={r} />
    ))}
    </div>
);
}
