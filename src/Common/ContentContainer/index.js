import React from 'react';
import s from './ContentContainer.module.css';

const ContentContainer = (props) => {
   return (
      <div className={s.mainContainer}>
         {props.children}
      </div>
   )
}
export default ContentContainer;