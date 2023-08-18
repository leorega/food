import styles from './pagBar.module.css';

const PagBar = () => {

    return (
        <div className={styles.cont}>
            <button className={styles.button} >{'<<prev'}</button>
            <h3>Page {0}</h3>
            <button className={styles.button} >{'next>>'}</button>
        </div>
    );
};

export default PagBar;