import React from 'react';
import ContentContainer from '../../Common/ContentContainer';
import NavLinkComponent from '../NavLinkComponent';
import UserContent from '../UserContent';
import s from './Profile.module.css';

const Profile = (props) => {
   return (
      <div className={s.mainContainer}>
         <ContentContainer>
            <div className={s.siteBarContainer}>
               <NavLinkComponent />
               <UserContent />
            </div>

         </ContentContainer>
      </div>
   )
}
export default Profile;