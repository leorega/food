
import { useNavigate } from 'react-router-dom';
import styles from './card.module.css';

const Card = (props) => {

    const navigate = useNavigate();

    const { recipe } = props;

    const navigateHandler = () => {
        navigate(`/detail/${recipe.id}`);
    };
    
    return (
        <div className={styles.cont}>
            <img className={styles.image} src={recipe.image} alt={recipe.name} />
            <h2 className={styles.title} onClick={navigateHandler} >{recipe.name}</h2>
            <h4 className={styles.diets} >Diets: {recipe.diets?.join(', ')}</h4>
            <h4 className={styles.healthScore}>HealthScore: {recipe.healthScore}</h4>
        </div>
    );
};

export default Card;