import React from "react";
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur sem id erat imperdiet, nec iaculis eros lobortis."}/>
                    <Skill title={'CSS'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur sem id erat imperdiet."}/>
                    <Skill title={'REACT'} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consectetur sem id erat imperdiet, nec iaculis eros lobortis."}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
