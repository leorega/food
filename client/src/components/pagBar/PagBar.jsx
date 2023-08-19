import styles from './pagBar.module.css';

const PagBar = (props) => {
    
    const { prevPage, nextPage, currentPage } = props;

    return (
        <div className={styles.cont}>
            <button className={styles.button} onClick={prevPage} >{'<<prev'}</button>
            <h3>Page {currentPage + 1}</h3>
            <button className={styles.button} onClick={nextPage} >{'next>>'}</button>
        </div>
    );
};

export default PagBar;