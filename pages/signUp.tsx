import styles from '../styles/signUp.module.css'
import Link from 'next/link'

const SignUp = () => {
    return <div className={styles.signUp}>
        <h2 className={styles.signUpText}>Sign Up for our Newsletter</h2>
        <input className={styles.signUpInput} placeholder="First Name"></input>
        <div className={styles.signUpButtonDiv}>
            <button className={styles.signUpButton}>Sign Up</button>
        </div>
        <div className={styles.signUpTermsAndConditions}>
            <input type="checkbox"></input>
            <label>I accept the terms and conditions</label>
        </div>
    </div >
}

export default SignUp