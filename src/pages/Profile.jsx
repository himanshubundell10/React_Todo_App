import React, { useContext } from 'react'
import {Context} from "../main"
import Loader from '../components/loader';

const Profile = () => {

  const {  user,loading} = useContext(Context);
  return (
    <div className="profileContainer">
      {loading ? (
        <Loader />
      ) : (<div>
          <h1 className="profile-name">{user?.name}</h1>
          <p className="profile-email">{user?.email}</p>
        </div>
      )}
    </div>
  );
}

export default Profile
