import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Spinner from "../../Shared/Spinner";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let signInError;
  if (gUser) {
    console.log("user", user);
  }
  if (loading || gLoading) {
    return <Spinner></Spinner>;
  }

  if (gError || error) {
    return (signInError = (
      <p className="text-red-500 mb-2">{gError?.message || error?.message}</p>
    ));
  }
  console.log(signInError);
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  return (
    <div className="flex items-center justify-center py-10">
      <div class="card w-96 bg-base-100 shadow-xl ">
        <div class="card-body">
          <h2 class="card-title">Please login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Username</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "enter valid email",
                  },
                })}
                type="email"
                placeholder="Your email"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.email?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span class="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password required",
                  },
                  minLength: {
                    value: 6,
                    message: "password must be 6 characters",
                  },
                })}
                type="password"
                placeholder="Your Password"
                class="input input-bordered w-full max-w-xs"
              />
              <label class="label">
                {errors.password?.type === "required" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span class="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              class="btn btn-active btn-primary btn-block"
              value="Login"
            />
          </form>
          <div className="">
            <span>Didn't register yet? </span>
            <Link to="/register" className="text-primary">
              Create Account.
            </Link>
          </div>
          <div class="divider">OR</div>
          {/* sign in with google  */}
          <div class="card-actions justify-end">
            <button
              onClick={handleGoogleSignIn}
              class="btn btn-outline btn-block"
            >
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
