import axios from 'axios';

import { GET_ALL_RECIPES, 
    GET_RECIPE_BY_ID, 
    GET_RECIPES_BY_NAME,
    FILTER_BY_DIET,
    FILTER_BY_SOURCE, 
    SORT_BY_NAME,
    SORT_BY_HEALTHSCORE 
} from './action_types';

export function getAllRecipes () {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/recipes')
            console.log(response.data);
            dispatch({
                type: GET_ALL_RECIPES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        };
    };
};
