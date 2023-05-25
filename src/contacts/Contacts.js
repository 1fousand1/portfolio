import React from 'react';
import styleContainer from "../common/styles/Container.module.css";
import style from "./Contacts.module.css";

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Contacts</h2>
                <form className={style.form}>
                    <input className={style.input}/>
                    <input className={style.input}/>
                    <textarea className={style.textarea}></textarea>
                </form>
                <button className={style.btn}>send</button>
            </div>
        </div>
    );
}

export default Contacts;