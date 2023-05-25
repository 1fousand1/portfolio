import React from 'react';
import style from './Footer.module.css';
import SocialList from "./socialList/SocialList";


const Footer = () => {
    return (
            <div className={style.footer}>
                <SocialList/>
            </div>
    );
};

export default Footer;