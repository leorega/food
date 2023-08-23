import React from 'react';
import SearchBar from '../searchBar/SearchBar';
import { useDispatch } from 'react-redux';
import { getAllRecipes } from '../../redux/actions';
import styles from './navBar.module.css';

const NavBar = () => {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getAllRecipes());
    };

    return (
        <div className={styles.cont}>
            <h1 onClick={handleClick}>Food L♥vers!</h1>
            <SearchBar/>
        </div>
    );
};

export default NavBar;