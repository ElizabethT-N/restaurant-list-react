import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { TEST_RESTAURANT } from '../components/TEST_RESTAURANT';  

const initialState = {
    restaurantsArray: TEST_RESTAURANT
};

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action) => {
            const newRestaurant = {
                id: action.payload.id || Date.now(),
                ...action.payload
            };
            state.restaurantsArray.push(newRestaurant);
        },
        deleteRestaurant: (state, action) => {
            state.restaurantsArray = state.restaurantsArray.filter(
                (restaurant) => restaurant.name !== action.payload
            );
        }
    }
});

export const { addRestaurant, deleteRestaurant } = restaurantSlice.actions;
export const restaurantReducer = restaurantSlice.reducer;

const selectRestaurantsArray = (state) => state.restaurants.restaurantsArray;

export const selectAllRestaurants = selectRestaurantsArray;

export const selectRestaurantById = (restaurantId) =>
    createSelector(
        [selectRestaurantsArray],
        (restaurants) =>
            restaurants.find(
                (restaurant) => restaurant.id === parseInt(restaurantId)
            )
    );

export const selectFeaturedRestaurant = createSelector(
    [selectRestaurantsArray],
    (restaurants) =>
        restaurants.find((restaurant) => restaurant.featured)
);