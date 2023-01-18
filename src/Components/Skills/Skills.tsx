import styles from "./Skills.module.css"

export const Skills = () => {
    return (
        <section id="skills" className={styles["portfolio-skills"]}>
            <div className={styles["skills-title"]}>
                <h2>Skills</h2>
            </div>
            <div>
                <div>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga. Et harum quidem rerum facilis est et expedita
                    distinctio. Nam libero tempore, cum soluta nobis est
                    eligendi optio cumque nihil impedit quo minus id quod maxime
                    placeat facere possimus, omnis voluptas assumenda est, omnis
                    dolor repellendus. Temporibus autem quibusdam et aut
                    officiis debitis aut rerum necessitatibus saepe eveniet ut
                    et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                    reiciendis voluptatibus maiores alias consequatur aut
                    perferendis doloribus asperiores repellat.
                </div>
                <div>
                    <h3>Languages</h3>
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Shell Scripting</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>VSCode</li>
                        <li>Ubuntu</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
