import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import { TEST_RESTAURANT } from '../components/TEST_RESTAURANT';  

// Initial state
const initialState = {
    restaurantsArray: TEST_RESTAURANT
};

// Create slice
const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {}
});

// Export the reducer
export const restaurantReducer = restaurantSlice.reducer;

// Base selector to get all restaurants
const selectRestaurantsArray = (state) => state.restaurants.restaurantsArray;

// Selector to get all restaurants
export const selectAllRestaurants = selectRestaurantsArray;

// ✅ Selector factory for getting a restaurant by ID (correctly memoized)
export const selectRestaurantById = (restaurantId) =>
    createSelector(
        [selectRestaurantsArray],
        (restaurants) =>
            restaurants.find(
                (restaurant) => restaurant.id === parseInt(restaurantId)
            )
    );

// Selector to get the featured restaurant
export const selectFeaturedRestaurant = createSelector(
    [selectRestaurantsArray],
    (restaurants) =>
        restaurants.find((restaurant) => restaurant.featured)
);