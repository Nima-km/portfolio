import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.title}>Full-Stack Developer</h1>
                <p className={styles.subtitle}>
                    Building production-grade mobile apps with modern
                    architecture, clean code, and user-focused design
                </p>
                <div className={styles.buttons}>
                    <a
                        href="#projects"
                        className={`${styles.btn} ${styles.primary}`}
                    >
                        See My Work
                    </a>
                    <a
                        href="#contact"
                        className={`${styles.btn} ${styles.secondary}`}
                    >
                        Get In Touch
                    </a>
                </div>
            </div>
        </section>
    );
}
