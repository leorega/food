
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRecipeById, resetRecipe } from '../../redux/actions';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = () => {

    const { id } = useParams(); 

    const navigate = useNavigate();

    const recipe = useSelector((state) => state.recipeById);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipeById(id));
        return (
            dispatch(resetRecipe())
        )
    },[]);

    const stripHtmlTags = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    const handleClick = () => {
        navigate(-1);
    };

    return (
        <div className={styles.cont}>
            <button onClick={handleClick}>X</button>
            <div className={styles.info_image_cont}>
                <div className={styles.info_cont}>
                    <h2>{recipe.name}</h2>
                    <h4>Id: {recipe.id}</h4>
                    <h4>Health Score: {recipe.healthScore}</h4>
                    <h4>Diets: {recipe.diets?.join(', ')}</h4>
                    <h4>Summary:</h4>
                    <p>{stripHtmlTags(recipe.summary)}</p>
                </div>
                <img src={recipe.image} alt={recipe.name} className={styles.image}/>
            </div>
            <h4>Step by step:</h4>
            <ol>
                {recipe.stepByStep?.map(step => 
                    <li>{step}</li>
                )}
            </ol>
        </div>
    );
};

export default Detail;