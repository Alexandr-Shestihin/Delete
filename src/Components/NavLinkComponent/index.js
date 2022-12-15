import React from 'react';
import s from './NavLinkComponent.module.css';

const NavLinkComponent = (props) => {
   return (
      <div className={s.container}>
         <div><a href="#">Menu</a></div>
         <div><a href="#">Users</a></div>
         <div><a href="#">Messages</a></div>
         <div><a href="#">Music</a></div>
         <div><a href="#">TV</a></div>
      </div>
   )
}
export default NavLinkComponent;