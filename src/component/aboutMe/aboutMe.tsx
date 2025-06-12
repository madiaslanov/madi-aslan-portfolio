import style from './aboutMe.module.css'

const AboutMe = () => {
    return (
        <div>
            <section id="aboutMe">
                <div className={style.aboutMeHead}>
                    <div className={style.abme1}>
                        <div className={style.border}>
                            <h1>
                                ABOUT ME
                            </h1>
                        </div>
                        <p>
                            To focus on the IT field, knowledge and technology helps to grow further

                        </p>
                    </div>
                    <div className={style.abme2}>
                        <div className={style.explore}>
                            <span></span>
                            <p>
                                EXPLORE
                            </p>
                            <span></span>
                        </div>
                        <img src="/line.svg" alt=""/>
                    </div>
                    <div className={style.mySkills}>
                        <div className={style.skill1}>
                            <img src="/design.svg" alt=""/>
                            <h3>DESIGN</h3>
                            <p>
                                Front-end developer focused on responsive, user-friendly interfaces. Skilled in HTML5,
                                CSS3,
                                Flexbox, Grid, and mobile-first design. Turn Figma/Sketch designs into clean, reusable
                                components. Ensure visual consistency and collaborate smoothly with designers and
                                back-end
                                teams.
                            </p>
                        </div>
                        <div className={style.skill2}>
                            <img src="/dev.svg" alt=""/>
                            <h3>DEVELOPMENT</h3>
                            <p>Experienced with JavaScript (ES6+), async programming, and DOM work. Build interactive
                                UIs
                                with React, using Redux, Zustand, or Context. Confident with REST APIs, data handling,
                                and
                                component-based architecture. Handle forms, routing, and performance optimizations.
                                Write
                                clean, maintainable code with Git and best practices.</p>

                        </div>
                        <div className={style.skill3}>
                            <img src="/skill.svg" alt=""/>
                            <h3>COMMUNICATION SKILLS</h3>
                            <p>
                                Communicative and fast-learning developer who thrives in team environments. Hackathon
                                experience taught me to adapt quickly, deliver under pressure, and collaborate
                                effectively.
                                Open to feedback, proactive, and supportive of shared goals. Value clear, productive
                                communication.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutMe;