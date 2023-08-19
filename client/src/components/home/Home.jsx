import NavBar from '../navBar/NavBar';
import Cards from '../cards/Cards';
import styles from './home.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecipes } from '../../redux/actions';

const Home = () => {

    const recipes = useSelector((state) => state.allRecipes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllRecipes());
    },[]);
    console.log(recipes);
    return (
        <div className={styles.cont}>
            <NavBar/>
            <Cards recipes={recipes}/>
        </div>
    );
};

export default Home;