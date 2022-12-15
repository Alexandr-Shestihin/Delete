import React from 'react';
import s from './Header.module.css';
import ContentContainer from './../../Common/ContentContainer';

const Header = (props) => {
   return (
      <div className={s.container}>

         <ContentContainer>
            <img src="https://w7.pngwing.com/pngs/696/880/png-transparent-lion-euclidean-pixabay-black-lion-king-black-and-white-lion-logo-animals-logo-fictional-character.png" alt="" />
         </ContentContainer>
      </div>
   )
}
export default Header;