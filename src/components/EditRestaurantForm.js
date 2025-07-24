import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRestaurant, deleteRestaurant, selectAllRestaurants } from '../restaurants/restaurantSlice';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const EditRestaurantForm = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState('');

    const dispatch = useDispatch();
    const restaurantList = useSelector(selectAllRestaurants);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name.trim() || !type.trim() || !category.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        dispatch(addRestaurant({
            id: Date.now(),
            name: name.trim(),
            type: type.trim(),
            category: category.trim()
        }));

        // Clear the form
        setName('');
        setType('');
        setCategory('');
    };

    //Delete name from restaurantList
    const handleDelete = (nameToDelete) => {
        dispatch(deleteRestaurant(nameToDelete));
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Restaurant Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Cuisine Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        className="form-control"
                    />
                </div>
                <div className="mb-2">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="form-select"
                    >
                        <option value="">Select Category</option>
                        <option value="By-Plate">By-Plate</option>
                        <option value="All-You-Can-Eat">All-You-Can-Eat</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success">Add Restaurant</button>
            </form>

            {restaurantList.length > 0 && (
                <DropdownButton
                    as={ButtonGroup}
                    variant="danger"
                    title="Delete a Restaurant"
                    className="mb-3"
                >
                    {restaurantList.map((restaurant, index) => (
                        <Dropdown.Item
                            key={index}
                            onClick={() => handleDelete(restaurant.name)}
                        >
                            {restaurant.name}
                        </Dropdown.Item>
                    ))}
                </DropdownButton>
            )}
        </>
    );
};

export default EditRestaurantForm;
