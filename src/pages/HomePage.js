import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAllRestaurants } from "../restaurants/restaurantSlice";
import RestaurantCard from "../restaurants/RestaurantCard";

export default function HomePage() {
const [restaurantFilter, setRestaurantFilter] = useState("All")

const restaurantList = useSelector(selectAllRestaurants);
const fullState = useSelector((state) => state);
console.log("FULL STATE:", fullState);

if (!restaurantList) {
    return <div>Loading...</div>;
}

let filteredRestaurants;
if (restaurantFilter === "All") {
    filteredRestaurants = restaurantList;
} else {
    filteredRestaurants = restaurantList.filter(
    (restaurant) => restaurant.category === restaurantFilter
    );
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
        {filteredRestaurants.map((r) => (
        <RestaurantCard key={r.id} restaurant={r} />
    ))}
    </div>
);
}
