import styles from "./About.module.css";

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>About Me</h2>
                <div className={styles.content}>
                    <p style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
                        I am a full-stack developer with expertise spanning
                        mobile, frontend, and backend development. Dedicated to
                        building seamless, user-centric applications, I believe
                        in maintaining clean, efficient code with rigorous
                        testing to ensure software reliability. My main
                        technologies include React Native, Next.js, Express.js,
                        and Django for creating scalable solutions from the
                        database layer all the way to the user interface.
                    </p>
                    <p style={{ marginBottom: "1.5rem", fontSize: "1rem" }}>
                        As an inquisitive and analytical person by nature, I
                        love learning how things operate under the hood and
                        using that knowledge to create something authentic. The
                        invaluable experience I have gained working through my
                        projects has solidified my skills in optimizing
                        performance, resolving bugs, and thinking creatively to
                        solve problems.These projects showcase my ability to
                        architect complex systems, manage state efficiently,
                        integrate machine learning, and deliver exceptional user
                        experiences. Whether building REST APIs with Express.js,
                        robust backends with Django, or dynamic frontends with
                        React and Next.js, I bring the same attention to detail
                        to every layer of the stack.
                    </p>

                    <p style={{ marginBottom: "0", fontSize: "1rem" }}>
                        Beyond building products, I am continuously exploring
                        new technologies, emerging patterns in full-stack
                        development, and contributing to the developer
                        community. I believe great software comes from
                        understanding both the technical requirements and the
                        user's needs behind every project.
                    </p>
                </div>
            </div>
        </section>
    );
}
