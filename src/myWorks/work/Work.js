import React from 'react';
import style from './Work.module.css';

const Work = (props) => {
    return (
        <div className={style.work}>
            <div className={style.workContainer}>
                <img className={style.img} src={props.src} alt={'Pic'}/>
                <button>я кнопка</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default Work;



