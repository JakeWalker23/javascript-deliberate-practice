import React, { useState } from "react";
import styles from '../styles/bmi.module.css'

const BMI = () => {

    const [data, setData] = useState({
        weight: "",
        height: ""
    });

    const [color, setColor] = useState('white');

    const [bmi, setBMI] = useState(0)

    function handle(e) {
        const newData = { ...data };
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    function BMI(height, weight) {
        return (weight / (height * height)) * 703
    }

    function calculateInches(feet) {
        return feet * 12
    }

    function calculateBMI() {
        const height = calculateInches(data.height)

        setBMI(BMI(height, data.weight))

        if (bmi > 19 && bmi < 25) {
            setColor('green')
        } else {
            setColor('red')
        }
    }

    return (
        <div>
            <h4 className={styles.heading}>BMI Calculator</h4>

            <div className={styles.bmi} style={{ color: color }}>
                {bmi.toFixed(2)}
            </div>

            <label className={styles.weight}>
                Please Enter your weight
            </label>

            <input className={styles["input-weight"]} placeholder="lbs" onChange={(e) => handle(e)} id="weight" required></input>

            <label className={styles.height}>
                Please Enter your height
            </label>

            <input className={styles["input-height"]} placeholder="feet e.g 6.2" onChange={(e) => handle(e)} id="height" required></input>
            <div className={styles["button-div"]}>
                <button onClick={calculateBMI} className={styles.button} type="submit">Calculate</button>
            </div>
        </div >
    )
}

export default BMI