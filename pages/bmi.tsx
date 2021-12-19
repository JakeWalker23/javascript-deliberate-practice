import React, { useState } from "react";
import styles from '../styles/bmi.module.css'

const BMI = () => {

    const [data, setData] = useState({
        weight: "",
        height: ""
    });

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
    }

    return (
        <div>
            <h4>BMI Calculator</h4>

            <label>
                Please Enter your weight
                <input placeholder="lbs" onChange={(e) => handle(e)} id="weight" required
                ></input>
            </label>

            <label>
                Please Enter your height
                <input placeholder="feet" onChange={(e) => handle(e)} id="height" required></input>
            </label>

            <button onClick={calculateBMI}>Calculate</button>

            <div>
                {bmi}
            </div>
        </div >
    )
}

export default BMI

/*

TODO

Use a GUI interface with sliders for height and weight.

Update the user interface on the fly. Use colors as well
as text to indicate health.



*/