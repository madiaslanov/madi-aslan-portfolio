import style from "./skills.module.css"
import {skillList} from "../../service/skill-list.ts";

const Skills = () => {
    return (
        <div className={style.container}>
            <section id="skills">
                <div className={style.skillHolder}>
                    <img src="/line.svg" alt=""/>
                    <div className={style.skillBorder}>
                        <p>SKILLS</p>
                    </div>
                    <div className={style.skillImgs}>
                        <h2>
                            USING NOW:
                        </h2>
                    </div>
                    <div className={style.images}>
                        {skillList.map((skill) => (
                            <div key={skill.id}>
                                <img src={skill.src} alt=""/>
                                <h2>{skill.name}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;