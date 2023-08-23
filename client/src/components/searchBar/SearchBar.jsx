import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipeByName } from '../../redux/actions';
import styles from './searchBar.module.css';

const SearchBar = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState();

    function changeHandler (event) {
        event.preventDefault();
        let input = event.target.value
  
        setName(input);
    };

    function onSearch (name) {
        dispatch(getRecipeByName(name));
    };

    return (
        <div className={styles.cont}>
            <input className={styles.input} type='search' value={name} onChange={changeHandler} placeholder='look for a recipe'/>
            <button className={styles.button} onClick={()=>onSearch(name)}>search</button>
        </div>
    );
};

export default SearchBar;