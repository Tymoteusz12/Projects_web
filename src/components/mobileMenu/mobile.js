import React from 'react';
import MenuToggler from './mobile/menuToggler';
import Menu from './mobile/menu';

export const menu = (props) => {
    return(
        <div>
            <MenuToggler 
            toggleMenuButton = {props.toggleMenuButton} 
            click={props.click}/>
            <Menu showMobileMenu = {props.showMobileMenu}/>
        </div>
    );
}

export default menu;