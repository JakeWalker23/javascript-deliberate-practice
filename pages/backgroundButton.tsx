import styles from '../styles/backgroundButton.module.css'
import Draggable from 'react-draggable' // Thank you. Grateful.
import React, { useState } from "react";

const BackgroundButton = () => {

    const [color, setColor] = useState('white');

    function changeBackground(event) {

        if (event.cancelable) {
            event.preventDefault();
        }

        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        setColor(color)
    }

    return <div className={styles.background} style={{ background: color }}>
        <Draggable>
            <button className={styles.button} onClick={changeBackground}>Change Background</button>
        </Draggable>
    </div >
}

export default BackgroundButton