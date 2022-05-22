import React from "react";
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    
    if(user){
        console.log('user',user);
    }
    if(error){
        console.log('error',error)
    }
    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }
  return (
    <div className="flex items-center justify-center py-10">
      <div class="card w-96 bg-base-100 shadow-xl ">
        <div class="card-body">
          <h2 class="card-title">Please login!</h2>
          <form>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                <span class="label-text-alt">Alt label</span>
              </label>
            </div>
          </form>
          <div class="card-actions justify-end">
            <button class="btn  btn-primary btn-block">Login</button>
          </div>
          <div class="divider">OR</div>
          <div class="card-actions justify-end">
            <button onClick={handleGoogleSignIn} class="btn btn-outline btn-block">Login With Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
