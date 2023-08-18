import styles from './createBar.module.css';

const CreateBar = () => {

    return (
        <div className={styles.cont}>
            <h4>Create your recipe by</h4>
            <button className={styles.button}>Clicking here</button>
        </div>
    );
};

export default CreateBar;