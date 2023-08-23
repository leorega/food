import React from 'react';
import FiltersBar from '../filtersBar/FiltersBar';
import PagBar from '../pagBar/PagBar';
import CreateBar from '../createBar/CreateBar';
import styles from './addBar.module.css';

const AddBar = (props) => {
    
    const { prevPage, nextPage, totalPages, currentPage } = props;

    return (
        <div className={styles.cont}>
            <FiltersBar/>
            <PagBar prevPage={prevPage} totalPages={totalPages} currentPage={currentPage} nextPage={nextPage}/>
            <CreateBar/>
        </div>
    );
};

export default AddBar;