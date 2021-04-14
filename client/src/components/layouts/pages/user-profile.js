import React, { useContext, useEffect } from "react";
import ProfileForm from '../ProfileForm'
import AllProfile from "../AllProfile"
import AuthContext from '../auth/AuthContext'
import profilePic from './icon.jpg'
const Profile = props => {
  const authContext = useContext(AuthContext)
  const { user, isAuthenticated, loadUser } = authContext
  useEffect(() => {
    if (isAuthenticated) {
      loadUser()
    }
    else {
      props.history.push('/login')
    }
  }, [isAuthenticated, props.history])
  return (
    <form className="form-container">

      <h3 style={{ textAlign: 'center' }}>{user && user.name}'s Profile</h3>

      <div className="user-profile" style={{ textAlign: 'center' }}>
        <img src={profilePic} alt="Card image cap" height={200} width={200} />
      </div>

      <div>
        &nbsp;
      </div>

      <ul className="list-group">
        <li className="list-group-item"> Name: {user && user.name} </li>
        <li className="list-group-item"> Email Address: {user && user.email} </li>
        <li className="list-group-item"> Phone Number: {user && user.phone} </li>
        <li className="list-group-item"> Bio: {user && user.bio} </li>
      </ul>

      <p className="btn-info-wrapper">
      <a href="/profile-form" className="btn-info" style={{paddingRight: '15px'}}>Edit</a>
      <a href="#" className="btn-info">Delete</a>
      </p>
    </form>
  );
}

export default Profile;

/**<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{user && user.name}</h5>
    <p class="card-text">{user && user.email}</p>
  </div>
</div> */

/**
 * <div className="container">
      <div className="row">
        <div className= "col-sm-6">
          <div class="container">
            <h4>{user && user.name}</h4>
            <p>{user && user.email}</p>
          </div>
          <AllProfile />
        </div>
          <div className='col-sm-3'>
            <ProfileForm />
          </div>
      </div>
    </div>
 */