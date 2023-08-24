import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByDiet, filterBySource, getDietsDB, sortByHealthScore, sortByName } from '../../redux/actions';
import styles from './filtersBar.module.css';

const FiltersBar = () => {

    const dietsDB = useSelector((state) => state.diets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDietsDB());
    },[]);

    function handleFilterByDiet (e) {
        dispatch(filterByDiet(e.target.textContent));
    };

    function handleFilterBySource (e) {
        dispatch(filterBySource(e.target.textContent));
    };

    function handleSortByName (e) {
        dispatch(sortByName(e.target.textContent))
    };

    function handleSortByHealthScore (e) {
        dispatch(sortByHealthScore(e.target.textContent))
    };

    return (
        <div className={styles.cont}>   
            <div className={styles.filters_cont}>
                <span>Filter by:</span>
                <div>
                    <button className={styles.button}>diets</button>
                    <ul className={styles.ul}>
                        {dietsDB.map((diet) => (
                            <li key={diet.id} onClick={handleFilterByDiet} value={diet.name}>{diet.name}</li>
                        ))}       
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>sources</button>
                    <ul className={styles.ul}>
                        <li onClick={handleFilterBySource} value='API'>API</li>
                        <li onClick={handleFilterBySource} value='Data Base'>Data Base</li>
                    </ul>
                </div>
            </div>
            <div className={styles.filters_cont}>
                <span>Order by:</span>
                <div>
                    <button className={styles.button}>name</button>
                    <ul className={styles.ul}>
                        <li onClick={handleSortByName} value='Ascending'>Ascending</li>
                        <li onClick={handleSortByName} value='Descending'>Descending</li>
                    </ul>
                </div>
                <div>
                    <button className={styles.button}>health score</button>
                    <ul className={styles.ul}>
                        <li onClick={handleSortByHealthScore} value='Ascending'>Ascending</li>
                        <li onClick={handleSortByHealthScore} value='Descending'>Descending</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FiltersBar;