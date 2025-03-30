
export default function RandomPage({ restaurantList }) {

    const randomRestaurant = restaurantList[ Math.floor(Math.random() * restaurantList.length) ]
    return (
        <div>
            <h5>You should eat...</h5>
            <h2 className="display-1">{ randomRestaurant.name }</h2>
        </div>
    );
};