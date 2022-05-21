import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
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
          <div class="divider">OR</div>
          <div class="card-actions justify-end">
            <button class="btn btn-outline btn-block">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
