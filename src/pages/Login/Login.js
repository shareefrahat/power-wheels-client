import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.png";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  //   const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || gUser) {
      navigate(from, { replace: true });
    }
  }, [user, gUser, from, navigate]);

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <div className="my-10 mx-10">
        <section>
          <div className="card w-fit mx-auto bg-base-100 shadow-xl">
            <section>
              <div className="flex flex-row justify-evenly items-center rounded bg-gray-200 font-serif font-medium mb-2 font-primary text-lg">
                <Link
                  to="/login"
                  className="bg-primary text-accent  px-4 py-2 w-full rounded"
                >
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="text-black px-4 py-2 w-full rounded hover:text-primary"
                >
                  <span>Signup</span>
                </Link>
              </div>
            </section>
            <div className="card-body">
              {signInError}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is Required",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Provide a valid Email",
                      },
                    })}
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
                    type="password"
                    placeholder="Password"
                    className="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is Required",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 characters or longer",
                      },
                    })}
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
                <p className="mb-6">
                  <small>
                    Forget Password?{"  "}
                    <Link className="text-primary" to="/passwordReset">
                      Reset Now!
                    </Link>
                  </small>
                </p>
                <input
                  className="btn btn-accent w-full max-w-xs text-white"
                  type="submit"
                  value={`${loading ? "Loading..." : "Login"}`}
                />
              </form>

              <p>
                <small>
                  Don't have an account?{"  "}
                  <Link className="text-primary" to="/signup">
                    Create Account
                  </Link>
                </small>
              </p>
              <div className="divider">OR</div>
              <button
                onClick={() => signInWithGoogle()}
                className="border-2 border-primary w-full flex flex-row justify-center items-center gap-4 rounded-md p-2"
              >
                <img src={googleLogo} alt="" className="w-6 mx-auto" />
                <p>{gLoading ? "Loading..." : "Continue with Google"}</p>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
