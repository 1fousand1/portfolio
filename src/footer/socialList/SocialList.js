import React from 'react';
import style from "../Footer.module.css";
import styleContainer from "../../common/styles/Container.module.css";

const SocialList = () => {
    return (
        <div className={`${styleContainer.container} ${style.footerContainer}`}>
            <h2>
                Danila Ostrowsky
            </h2>
            <ul className={style.socialList}>
                <li><img src={'#'} alt={'icon'}/></li>
                <li><img src={'#'} alt={'icon'}/></li>
                <li><img src={'#'} alt={'icon'}/></li>
                <li><img src={'#'} alt={'icon'}/></li>
            </ul>
            <h2>
                © 2023 All rights reserved
            </h2>
        </div>
    );
};

export default SocialList;