import FiltersBar from '../filtersBar/FiltersBar';
import PagBar from '../pagBar/PagBar';
import CreateBar from '../createBar/CreateBar';
import styles from './addBar.module.css';

const AddBar = () => {

    return (
        <div className={styles.cont}>
            <FiltersBar/>
            <PagBar/>
            <CreateBar/>
        </div>
    );
};

export default AddBar;