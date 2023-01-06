import React, { useEffect } from 'react';
import s from './Header.module.css';
import ContentContainer from './../../Common/ContentContainer';
import { NavLink } from 'react-router-dom';
import { API } from '../../API';
import { getCurrentUserInfoThunkCreator } from '../../Redux/Reducers/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';

const Header = (props) => {

   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getCurrentUserInfoThunkCreator());
   }, [])

   const isAuth = useSelector(el => el.authReducer.isAuth);
   const login = useSelector(el => el.authReducer.login);

   return (
      <div className={s.container}>

         <ContentContainer>
            <div className={s.flexContainer}>
               <img src="https://w7.pngwing.com/pngs/696/880/png-transparent-lion-euclidean-pixabay-black-lion-king-black-and-white-lion-logo-animals-logo-fictional-character.png" alt="" />
               {isAuth ? <span className={s.loginLink}>{login}</span> : <NavLink>
                  <span className={s.loginLink}>Login</span>
               </NavLink>}
            </div>
         </ContentContainer >
      </div >
   )
}
export default Header;