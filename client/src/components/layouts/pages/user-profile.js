import React, { useContext, useEffect } from "react";
import ProfileForm from '../ProfileForm'
import AllProfile from "../AllProfile"
import AuthContext from '../auth/AuthContext'
import profilePic from './splash.png'
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

      <div className="form-group">
      <label>Name: &nbsp; </label>
        {user && user.name}
      </div>

      <div className="form-group">
        <label>Email address: &nbsp; </label>
        {user && user.email}
      </div>
      <div className="form-group">
        <label>Phone Number: &nbsp; </label>
        123-456-7890
      </div>
      <div className="form-group">
        <label>Bio: &nbsp; </label>
        Im blah blah, I teach blah blah, and so on and so forth. 
      </div>
    
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