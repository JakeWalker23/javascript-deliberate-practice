import styles from '../styles/Home.module.css'
import Link from 'next/link'


const TrainingMenu = () => {
    return (
        <main>
            <div className={styles.grid}>
                <Link href="/signUp">
                    <div className={styles.card}
                    >
                        <h2>Sign Ups </h2>
                        <p>
                            Enter the deliberate practice dojo for Sign Ups.
                        </p>
                    </div>
                </Link>

            </div>
            <div className={styles.grid}>
                <Link href="/backgroundButton">
                    <div className={styles.card}
                    >
                        <h2>Background Button </h2>
                        <p>
                            Enter the deliberate practice dojo for background button.
                        </p>
                    </div>
                </Link>

            </div>
            <div className={styles.grid}>
                <Link href="/bmi">
                    <div className={styles.card}
                    >
                        <h2>BMI Calculator </h2>
                        <p>
                            Enter the deliberate practice dojo for BMI Calculator
                        </p>
                    </div>
                </Link>

            </div>
            <div className={styles.grid}>
                <Link href="/#">
                    <div className={styles.card}
                    >
                        <h2>Coming Soon </h2>
                        <p>
                            Dojo under development.
                        </p>
                    </div>
                </Link>

            </div>

            <div className={styles.grid}>
                <Link href="/#">
                    <div className={styles.card}
                    >
                        <h2>Coming Soon </h2>
                        <p>
                            Dojo under development.
                        </p>
                    </div>
                </Link>

            </div>
            <div className={styles.grid}>
                <Link href="/#">
                    <div className={styles.card}
                    >
                        <h2>Coming Soon </h2>
                        <p>
                            Dojo under development.
                        </p>
                    </div>
                </Link>

            </div>
        </main >
    )

}


export default TrainingMenu






// TODO


/*
 Arrange cards for training selection inside DOJO

    Each card is a training topic

        Click on topic

            Start Training




*/