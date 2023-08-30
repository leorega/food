import { GET_ALL_RECIPES, 
    GET_RECIPE_BY_ID, 
    GET_RECIPES_BY_NAME,
    FILTER_BY_DIET,
    FILTER_BY_SOURCE,
    SORT_BY_NAME,
    SORT_BY_HEALTHSCORE, 
    RESET_RECIPE,
    GET_DIETS_DB
} from './action_types';

let initialState = {
    allRecipes: [],
    diets: [],
    allRecipesBackUp: [],
    recipeById: [],
    filteredRecipes: []
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
                allRecipes: action.payload,
                allRecipesBackUp: action.payload
            } 
        case GET_DIETS_DB:
            return {
                ...state,
                diets: action.payload
            }
        case FILTER_BY_DIET:
            return{
                ...state,
                allRecipes: state.allRecipesBackUp.filter(
                    (recipe) => recipe.diets?.includes(action.payload)
                )
            }
        case FILTER_BY_SOURCE:
            let bySource;
            if (action.payload === "API") {
                bySource = state.allRecipesBackUp.filter(
                    (recipe) => typeof recipe.id === 'number'
                )
            } else {
                bySource = state.allRecipesBackUp.filter(
                    (recipe) => typeof recipe.id !== 'number'
                )    
            }
            return{
                 ...state,
                allRecipes: [...bySource]
            }
        case SORT_BY_NAME:
            let byName;
            if (action.payload === "Ascending") {
                byName = [...state.allRecipes].sort((a, b) => a.name.localeCompare(b.name));
            } else {
                byName = [...state.allRecipes].sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                allRecipes: byName
            };
        case SORT_BY_HEALTHSCORE:
            let byHealthScore;
            if (action.payload === "Ascending") {
                byHealthScore = [...state.allRecipes].sort((a, b) => a.healthScore - b.healthScore);
            } else {
                byHealthScore = [...state.allRecipes].sort((a, b) => b.healthScore - a.healthScore);
            }
            return {
                ...state,
                allRecipes: byHealthScore
            };
        default:
            return state; 
    };
}

export default rootReducer;