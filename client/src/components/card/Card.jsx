
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';

const Card = (props) => {

    const navigate = useNavigate();

    const { recipe } = props;

    const navigateHandler = () => {
        navigate(`/detail/${recipe.id}`);
    };

    let formattedDiets;
    if (typeof recipe.id === "string") {
        formattedDiets = recipe.Diets?.map(diet => diet.name).join(', ');
    }
    else {
        formattedDiets = recipe.diets?.join(', ');
    }
    
    return (
        <div className={styles.cont}>
            <img className={styles.image} src={recipe.image} alt={recipe.name} />
            <h2 className={styles.title} onClick={navigateHandler} >{recipe.name}</h2>
            <h4 className={styles.diets} >Diets: {formattedDiets}</h4>
        </div>
    );
};

export default Card;