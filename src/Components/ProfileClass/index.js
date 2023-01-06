import React from 'react';
import s from './profile.module.css';

class ProfileClass extends React.Component {

   render() {

      return (
         <div className={s.container}>
            {this.props.profile?.photos.large ?
               <div><img src={this.props.profile?.photos.large} alt="photo" /></div> : false}
            <div className={s.containerInfo}>
               <div>Name: {this.props.profile?.fullName}</div>
               <div>AboutMe: {this.props.profile?.aboutMe}</div>
            </div>
         </div>
      )

   }

}
export default ProfileClass;