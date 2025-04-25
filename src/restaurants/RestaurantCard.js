import { Link } from "react-router-dom";

function RestaurantCard({ restaurant }) {
    return (
        <div className='bg-light border p-4 m-2'>
            <h4>{restaurant.name}</h4>
            <p>{restaurant.rating}</p>
            <p>{restaurant.category}</p>
            <Link to={"/restaurant/" + restaurant.id}>Details</Link>
            </div>
    );
    };

export default RestaurantCard;