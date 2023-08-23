import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './createBar.module.css';

const CreateBar = () => {

    const navigate = useNavigate();

    function handleNavigate () {
        navigate('/form');
    };

    return (
        <div className={styles.cont}>
            <h4>Create your recipe by</h4>
            <button className={styles.button} onClick={handleNavigate}>Clicking here</button>
        </div>
    );
};

export default CreateBar;