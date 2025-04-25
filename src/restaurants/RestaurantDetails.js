import { Card, CardText, CardBody, Col } from 'reactstrap';

const RestaurantDetail = ({ restaurant }) => {
    const { name, rating, type, category } = restaurant;

    return (
        <Col md="4" className="mb-4">
            <Card className="bg-light border p-4">
                <CardBody>
                    <h4>{name}</h4>
                    <CardText>{rating}</CardText>
                    <CardText>{type}</CardText>
                    <CardText>{category}</CardText>
                </CardBody>
            </Card>
        </Col>

    )
};

export default RestaurantDetail;