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
                            <li onClick={'handleFilterByGenre'} value={diet}>{diet}</li>
                        ))}       
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>sources</button>
                    <ul className={styles.ul}>
                        <li onClick={'handleFilterBySource'} value='API'>API</li>
                        <li onClick={'handleFilterBySource'} value='Data Base'>Data Base</li>
                    </ul>
                </div>
            </div>
            <div className={styles.filters_cont}>
                <span>Order by:</span>
                <div>
                    <button className={styles.button}>name</button>
                    <ul className={styles.ul}>
                        <li onClick={'handleSortByAlpha'} value='Ascending'>ascending</li>
                        <li onClick={'handleSortByAlpha'} value='Descending'>descending</li>
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>health score</button>
                    <ul className={styles.ul}>
                        <li onClick={'handleSortByRating'} value='Ascending'>ascending</li>
                        <li onClick={'handleSortByRating'} value='Descending'>descending</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FiltersBar;