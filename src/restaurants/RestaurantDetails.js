import { Card, CardText, CardBody } from 'reactstrap';

const RestaurantDetail = ({ restaurant }) => {
    const { name, rating, type, category } = restaurant;

    return (
        <>
            <div className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
                <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <h4>{name}</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>{rating}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>{type}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <p>{category}</p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
};


export default RestaurantDetail;