import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllRestaurants } from "../restaurants/restaurantSlice";
import RestaurantCard from "../restaurants/RestaurantCard";
import { GoogleLogin } from "@react-oauth/google";

export default function HomePage() {
const [restaurantFilter, setRestaurantFilter] = useState("All")

const [isLoggedIn, setIsLoggedIn] = useState(false);


const navigate = useNavigate();
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
            {!isLoggedIn && (
                <GoogleLogin
                    onSuccess={(credentialResponse) => {
                        console.log("Google login success:", credentialResponse);
                        setIsLoggedIn(true);
                    }}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            )}

            <div className="my-3">
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
                <button className="btn btn-success me-2" onClick={() => navigate("/edit")}>
                    Edit
                </button>
            </div>

            {filteredRestaurants.map((r) => (
                <RestaurantCard key={r.id} restaurant={r} />
            ))}
        </div>
    );
}
