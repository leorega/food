import SearchBar from '../searchBar/SearchBar';
import styles from './navBar.module.css';

const NavBar = () => {

    return (
        <div className={styles.cont}>
            <h1>Food L♥vers!</h1>
            <SearchBar/>
        </div>
    );
};

export default NavBar;