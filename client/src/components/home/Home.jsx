import NavBar from '../navBar/NavBar';
import Cards from '../cards/Cards';
import styles from './home.module.css';

const Home = () => {

    return (
        <div className={styles.cont}>
            <NavBar/>
            <Cards/>
        </div>
    );
};

export default Home;