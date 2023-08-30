import axios from 'axios';

import { GET_ALL_RECIPES, 
    GET_RECIPE_BY_ID, 
    RESET_RECIPE,
    GET_RECIPES_BY_NAME,
    GET_DIETS_DB,
    FILTER_BY_DIET,
    FILTER_BY_SOURCE, 
    SORT_BY_NAME,
    SORT_BY_HEALTHSCORE, 
} from './action_types';

export function getAllRecipes () {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/recipes');
            dispatch({
                type: GET_ALL_RECIPES,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
        };
    };
 };

export function getRecipeById (id) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/${id}`);
            dispatch({
                type: GET_RECIPE_BY_ID,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};

export function resetRecipe () {
    return {
        type: RESET_RECIPE
    };
};

export function getRecipeByName (name) {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/recipes/name?name=${name}`);
            dispatch({
                type: GET_RECIPES_BY_NAME,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error);
        };
    };
};

export function getDietsDB () {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/dietsDB')
            dispatch({
                type: GET_DIETS_DB,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error);
        };
    }; 
};

export function createRecipe (state) {
    return async function () {
        try {
            await axios.post('http://localhost:3001/recipes', state)
            alert('Recipe created successfully')
        } catch (error) {
            alert("There was a mistake. The recipe wasn't created. Check the entered data...");
        };
    };
};

export const filterByDiet = (diet) => ({
    type: FILTER_BY_DIET,
    payload: diet,
});
  
export const filterBySource = (source) => ({
    type: FILTER_BY_SOURCE,
    payload: source,
});
  
export const sortByName = (order) => ({
    type: SORT_BY_NAME,
    payload: order,
});
  
export const sortByHealthScore = (order) => ({
    type: SORT_BY_HEALTHSCORE,
    payload: order,
});