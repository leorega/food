import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllRecipes } from '../../redux/actions';
import styles from './landing.module.css';

const Landing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes());
    },[]);

    return (
        <div className={styles.cont}>
            <div>
                <p >
                    Welcome to the <p><h2> Food L♥vers </h2></p> page!
                </p>
            </div>
            <NavLink className = {styles.nav_button} to='/home'>
                <button className = {styles.button}>Get in!</button>
            </NavLink>
        </div>
    )
}

export default Landing;