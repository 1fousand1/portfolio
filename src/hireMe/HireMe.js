import React from 'react';
import style from './HireMe.module.css';
import styleContainer from "../common/styles/Container.module.css";

const HireMe = () => {
    return (
        <div className={style.hireMeBlock}>
            <div className={`${styleContainer.container} ${style.hireMeContainer}`}>
                <div className={style.banner}>
                    <h2>I am considering remote work</h2>
                    <button className={style.btn}>hire me</button>
                </div>
            </div>
        </div>
    );
};

export default HireMe;