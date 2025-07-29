import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectAllRestaurants } from "../restaurants/restaurantSlice";
import RestaurantCard from "../restaurants/RestaurantCard";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function HomePage() {
    const [restaurantFilter, setRestaurantFilter] = useState("All");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const navigate = useNavigate();
    const restaurantList = useSelector(selectAllRestaurants);

    if (!restaurantList) {
        return <div>Loading...</div>;
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserInfo(null);
    };

    let filteredRestaurants;
    if (restaurantFilter === "All") {
        filteredRestaurants = restaurantList;
    } else {
        filteredRestaurants = restaurantList.filter(
            (restaurant) => restaurant.category === restaurantFilter
        );
    }

    return (
        <div className="container mt-4">
            {!isLoggedIn ? (
                <div>
                    <h3>Please log in to view restaurants</h3>
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            const decoded = jwtDecode(credentialResponse.credential);
                            console.log("User info:", decoded);
                            setUserInfo(decoded);
                            setIsLoggedIn(true);
                        }}
                        onError={() => {
                            console.log("Login Failed");
                        }}
                    />
                </div>
            ) : (
                <div>
                    <div className="d-flex justify-content-between align-items-center my-3">
                        <h5>Welcome, {userInfo?.given_name || "Guest"}!</h5>
                        <button className="btn btn-outline-danger" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>

                    <div className="my-3">
                        <button className="btn btn-primary me-2" onClick={() => setRestaurantFilter("All")}>
                            All
                        </button>
                        <button className="btn btn-primary me-2" onClick={() => setRestaurantFilter("By-Plate")}>
                            By-Plate
                        </button>
                        <button className="btn btn-primary me-2" onClick={() => setRestaurantFilter("All-You-Can-Eat")}>
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
            )}
        </div>
    );
}
