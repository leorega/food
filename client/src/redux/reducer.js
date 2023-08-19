import { GET_ALL_RECIPES, 
    GET_RECIPE_BY_ID, 
    GET_RECIPES_BY_NAME,
    FILTER_BY_DIET,
    FILTER_BY_SOURCE,
    SORT_BY_NAME,
    SORT_BY_HEALTHSCORE 
} from './action_types';

let initialState = {
    allRecipes: [],
    allRecipesBackUp: [],
    recipeById: [],
    recipesByName: [],
    recipesFilteredByDiet: [],
    recipesFilteredBySource: [],
    recipesSortByName: [],
    recipesSortByHealthScore: []
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_RECIPES:
            return {
                ...state,
                allRecipes: action.payload,
                allRecipesBackUp: action.payload
            }
        default:
            return state; 
    };
}

export default rootReducer;