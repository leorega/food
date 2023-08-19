import { useDispatch, useSelector } from 'react-redux';
import AddBar from '../addBar/AddBar';
import Card from '../card/Card';
import { useEffect, useState } from 'react';
import { getAllRecipes } from '../../redux/actions';
import styles from './cards.module.css';

const Cards = (props) => {

    const { recipes } = props;

    const recipesPerPage = 9;
    const [currentPage, setCurrentPage] = useState(0);
    const [aPageRecipes, setAPageRecipes] = useState([]);

    useEffect(() => {
        setAPageRecipes(recipes.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage));
    }, [recipes, currentPage]); 

    /*useEffect(() => {
        setAPageRecipes(filteredGames.slice(currentPage * recipesPerPage, (currentPage + 1) * recipesPerPage));
    }, [filteredGames, currentPage]);*/
    
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
    console.log(recipes);
    return (
        <div className={styles.cont}>
            <AddBar prevPage={prevPage} currentPage={currentPage} nextPage={nextPage}/>
            <div className={styles.cards_cont}>
                {aPageRecipes.map((recipe) => (
                    <Card key={recipe.id} recipe={recipe}/>
                ))}
            </div>
        </div>
    );
};

export default Cards;