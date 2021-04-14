import React from "react";
import pic from './pages/wip.jpg';


function HomePage() {
  return (
    <form className="form-container">

      <h3 style={{ textAlign: 'center' }}>Welcome to Professor's Place</h3>

      <div className="user-profile" style={{ textAlign: 'center' }}>
        <img src={pic} alt="face pic" height={312} width={624} />
      </div>

      <div className="form-group" style={{ margin: '1%', textAlign: 'left' }}>
      Our developers are typing a mile a minute to finish tidying up, please excuse the mess! :)
      </div>

    </form>


  );
}

export default HomePage;