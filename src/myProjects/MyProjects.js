import React from "react";
import style from './MyProjects.module.css';
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";

const MyProjects = () => {
    return (
        <div className={style.MyProjectsBlock}>
            <div className={`${styleContainer.container} ${style.MyProjectsContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.projects}>
                    <Project src={"#"} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ornare risus. Pellentesque vitae nisl rhoncus, pulvinar arcu a, molestie orci. Nunc imperdiet blandit ex, sed scelerisque leo. Quisque ut nisl et erat aliquam ultrices. Fusce commodo ipsum et leo finibus posuere. Maecenas semper ex vitae tortor euismod tempus. Nunc quis arcu non enim pretium molestie id et sapien. Etiam luctus maximus orci id laoreet. Nulla hendrerit aliquam mattis. Vestibulum purus lorem, cursus sit amet felis eu, bibendum luctus nunc. Nunc at aliquam mauris. Donec convallis est ut magna luctus, a placerat nisi ultrices. Maecenas commodo elit est, id bibendum mi sodales rutrum.'}/>
                    <Project src={"#"} title={'Social Network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ornare risus. Pellentesque vitae nisl rhoncus, pulvinar arcu a, molestie orci. Nunc imperdiet blandit ex, sed scelerisque leo. Quisque ut nisl et erat aliquam ultrices. Fusce commodo ipsum et leo finibus posuere. Maecenas semper ex vitae tortor euismod tempus. Nunc quis arcu non enim pretium molestie id et sapien. Etiam luctus maximus orci id laoreet. Nulla hendrerit aliquam mattis. Vestibulum purus lorem, cursus sit amet felis eu, bibendum luctus nunc. Nunc at aliquam mauris. Donec convallis est ut magna luctus, a placerat nisi ultrices. Maecenas commodo elit est, id bibendum mi sodales rutrum.'}/>
                </div>
            </div>
        </div>
    );
}

export default MyProjects;
