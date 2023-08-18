import styles from './searchBar.module.css';

const SearchBar = () => {

    return (
        <div className={styles.cont}>
            <input className={styles.input} type="text" placeholder='look for a recipe'/>
            <button className={styles.button}>search</button>
        </div>
    );
};

export default SearchBar;