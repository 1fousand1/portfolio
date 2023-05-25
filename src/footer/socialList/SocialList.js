import React from 'react';
import style from "../Footer.module.css";
import styleContainer from "../../common/styles/Container.module.css";

const SocialList = () => {
    return (
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2 className={style.title}>
                Danila Ostrowsky
            </h2>
            <div className={style.socialList}>
                <div className={style.icon}><img  src={'#'} alt={'icon'}/></div>
                <div className={style.icon}><img  src={'#'} alt={'icon'}/></div>
                <div className={style.icon}><img  src={'#'} alt={'icon'}/></div>
                <div className={style.icon}><img  src={'#'} alt={'icon'}/></div>
            </div>
            <h3 className={style.title}>
                © 2023 All rights reserved
            </h3>
        </div>
    );
};

export default SocialList;