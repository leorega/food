import { GET_ALL_RECIPES, 
    GET_RECIPE_BY_ID, 
    GET_RECIPES_BY_NAME,
    FILTER_BY_DIET,
    FILTER_BY_SOURCE,
    SORT_BY_NAME,
    SORT_BY_HEALTHSCORE, 
    RESET_RECIPE,
    GET_DIETS,
    GET_DIETS_DB,
    CREATE_RECIPE
} from './action_types';

let initialState = {
    allRecipes: [],
    diets: [],
    allRecipesBackUp: [],
    recipeById: [],
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
        case GET_RECIPE_BY_ID:
            return {
                ...state,
                recipeById: action.payload
            }
        case RESET_RECIPE:
            return {
                ...state,
                recipeById: []
            }   
        case GET_RECIPES_BY_NAME:
            return {
                ...state,
                allRecipes: action.payload
            } 
        case GET_DIETS_DB:
            return {
                ...state,
                diets: action.payload
            }
        default:
            return state; 
    };
}

export default rootReducer;