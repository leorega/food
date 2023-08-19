import styles from './card.module.css';

const Card = (props) => {

    const { recipe } = props;

    return (
        <div className={styles.cont}>
            <img className={styles.image} src={recipe.image} alt={recipe.name} />
            <h2 className={styles.title} >{recipe.name}</h2>
            <h4 className={styles.diets} >Diets: {recipe.diets.join(', ')}</h4>
        </div>
    );
};

export default Card;