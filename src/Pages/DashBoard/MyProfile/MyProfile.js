import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img
        style={{height: '100px', width: '100px', borderRadius: '50%', border: '1px solid grey'}}
          src={user?.photoURL}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">{user?.displayName}</h1>
          <p class="py-6">
            {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
