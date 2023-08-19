import FiltersBar from '../filtersBar/FiltersBar';
import PagBar from '../pagBar/PagBar';
import CreateBar from '../createBar/CreateBar';
import styles from './addBar.module.css';

const AddBar = (props) => {
    
    const { prevPage, nextPage, currentPage } = props;

    return (
        <div className={styles.cont}>
            <FiltersBar/>
            <PagBar prevPage={prevPage} currentPage={currentPage} nextPage={nextPage}/>
            <CreateBar/>
        </div>
    );
};

export default AddBar;