import styles from './filtersBar.module.css';

const FiltersBar = () => {

    const diets = ['una', 'dos', 'tres', 'cuatro', 'cinco'];

    return (
        <div className={styles.cont}>   
            <div className={styles.filters_cont}>
                <span>Filter by:</span>
                <div>
                    <button className={styles.button}>diets</button>
                    <ul className={styles.ul}>
                        {diets.map((diet) => (
                            <li  key={diet} value={diet}>{diet}</li>
                        ))}       
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>sources</button>
                    <ul className={styles.ul}>
                        <li  value='API'>API</li>
                        <li  value='Data Base'>Data Base</li>
                    </ul>
                </div>
            </div>
            <div className={styles.filters_cont}>
                <span>Order by:</span>
                <div>
                    <button className={styles.button}>name</button>
                    <ul className={styles.ul}>
                        <li  value='Ascending'>ascending</li>
                        <li  value='Descending'>descending</li>
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>health score</button>
                    <ul className={styles.ul}>
                        <li  value='Ascending'>ascending</li>
                        <li  value='Descending'>descending</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FiltersBar;