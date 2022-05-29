import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Spinner from "../../Shared/Spinner";
import { Link, useNavigate } from "react-router-dom";
import useToken from "./../../hooks/useToken";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const [token] = useToken(user || gUser);
  let signInError;
  if (token) {
    console.log("user", user);
    navigate("/dashboard");
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
      <div className="card w-full bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Please login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Username</span>
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
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
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            {signInError}
            <input
              type="submit"
              className="btn btn-active btn-primary btn-block"
              value="Login"
            />
          </form>
          <div className="">
            <span>Didn't register yet? </span>
            <Link to="/register" className="text-primary">
              Create Account.
            </Link>
          </div>
          <div className="divider">OR</div>
          {/* sign in with google  */}
          <div className="card-actions justify-end">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-block"
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
