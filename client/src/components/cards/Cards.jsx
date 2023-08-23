import React from 'react';
import AddBar from '../addBar/AddBar';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './cards.module.css';

const Cards = (props) => {

    const { recipes } = props;
    
    const recipesPerPage = 9;
    let totalPages = 1;
    if (recipes.length % 9 === 0) {
        totalPages = Math.floor(recipes.length / 9);
    }
    else {
        totalPages = Math.floor(recipes.length / 9) + 1;
    }
    const [currentPage, setCurrentPage] = useState(0);
    const [aPageRecipes, setAPageRecipes] = useState([]);

    useEffect(() => {
        setAPageRecipes(recipes.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage));
    }, [recipes, currentPage]); 
    
    function nextPage () {
        const totalElements = recipes.length;
        const nextPage = currentPage + 1;
        const firstIndex = nextPage * recipesPerPage;

        if (firstIndex >= totalElements) return;

        setCurrentPage(nextPage);
    };

    function prevPage () {
        const prevPage = currentPage - 1;

        if (prevPage < 0) return;

        setCurrentPage(prevPage);
    };
    
    return (
        <div className={styles.cont}>
            <AddBar prevPage={prevPage} totalPages={totalPages} currentPage={currentPage} nextPage={nextPage}/>
            <div className={styles.cards_cont}>
                {aPageRecipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </div>
    );
};

export default Cards;