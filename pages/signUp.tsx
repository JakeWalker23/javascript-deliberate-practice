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






/*
Reflection:

+ What went good
- What not so good
* What could be improved



+ Using next. Got training environment set up

- My Front end needs work

* positioning should be improved

* layout should be improved

* colors should be improved

* knowledge of the DOM should be improved

* More knowledge of CSS commands should be improved

+ Good experience I have got the amount of code a simple component needs.

- eye for design.

* Eye for design.


*/