import React from 'react';
import classes from './short_info.module.css';
import info from '../../../../resources/img/info.png';

const About = props => {
    return(
        <div className={classes.inside}>
            <img src={info} alt="header_img"/>
            <h3>About me</h3>
            <p>Programmist, physics lover, amateur astronomer and 
                weight lifting hobbyist. Programming became for me
                daily routine and an opportunity to meet surounding 
                technologies from inside. Every day for me is a reason
                to master my skills and get me closer to my dreams. 
                I am not scarred of intelectual challenges, because
                I know, that every struggle develops my experience
                and my abilities. In the future I would like to become
                full stack developer.</p>
        </div>
    );
}

export default About;