import AddBar from '../addBar/AddBar';
import Card from '../card/Card';
import styles from './cards.module.css';

const Cards = () => {

    return (
        <div className={styles.cont}>
            <AddBar/>
            <Card/>
        </div>
    );
};

export default Cards;