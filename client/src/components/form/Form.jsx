import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRecipe, getDietsDB } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import styles from './form.module.css';

const Form = () => {

    const navigate = useNavigate();

    const dietsDB = useSelector((state) => state.diets);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name: '',
        summary: '',
        healthScore: '',
        stepByStep: [],
        image: '',
        diets: []
    });
    console.log(formData);
    useEffect(() => {
        dispatch(getDietsDB());
    },[]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: name === 'stepByStep' ? [value] : value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const valueName = event.target.value;
        if (checked) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: [...prevFormData[name], valueName],
        }));
        } else {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: prevFormData[name].filter((diet) => diet !== valueName),
        }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(createRecipe(formData));
    };

    const handleClose = () => {
        navigate('/home');
    };

    return (
        <div className={styles.cont}>
            <button className={styles.exit_button} onClick={handleClose}>Exit</button>
            <div className={styles.form_container}>
                <h1 className={styles.title}>Create a New Recipe</h1>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label className={styles.label}>
                    Name:
                    </label>
                    <input className={styles.input} type="text" name="name" value={formData.name} onChange={handleInputChange}/>
                    <label className={styles.label}>
                    Image:
                    </label>
                    <input className={styles.input} type="text" name="image" value={formData.image} onChange={handleInputChange}/>
                    <label className={styles.label}>
                    Summary:
                    </label>
                    <textarea className={styles.textarea} name="summary" value={formData.summary} onChange={handleInputChange}/>
                    <label className={styles.label}>
                    Health score:
                    </label>
                    <input className={styles.input} type="text" name="healthScore" value={formData.healthScore} onChange={handleInputChange}/>
                    <label className={styles.label}>
                    Step by step:
                    </label>
                    <textarea className={styles.textarea} name="stepByStep" value={formData.stepByStep} onChange={handleInputChange}/>
                    <div className={styles.label}>
                    <p>Select Diets:</p>
                    <div className={styles.diets}>
                        {dietsDB?.map((diet) => (
                            <label className={styles.labelDiets} key={diet.id}>
                            {diet.name}
                            <input
                                type="checkbox"
                                name="diets"
                                value={diet.name}
                                checked={formData.diets.includes(diet.name)}
                                onChange={handleCheckboxChange}
                            />
                            </label>
                        ))}     
                    </div>
                    </div>
                    <button type="submit" className={styles.button}>Create Recipe</button>
                </form>
            </div>
        </div>
    );
};

export default Form;