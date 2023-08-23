import React from 'react';
import NavBar from '../navBar/NavBar';
import Cards from '../cards/Cards';
import styles from './home.module.css';
import { useSelector } from 'react-redux';

const Home = () => {

    const recipes = useSelector((state) => state.allRecipes);
    
    return (
        <div className={styles.cont}>
            <NavBar/>
            <Cards recipes={recipes}/>
        </div>
    );
};

export default Home;