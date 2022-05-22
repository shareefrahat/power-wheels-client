import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import auth from "../../firebase.init";

const PasswordReset = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate("");
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter your email", { id: "passwordReset" });
      return;
    } else {
      await sendPasswordResetEmail(email);
      toast.success("Password reset email send", {
        id: "passwordReset",
      });
      navigate("/login");
    }
  };

  return (
    <div className="my-10 mx-10">
      <section>
        <div className="card w-fit mx-auto bg-base-100 shadow-xl">
          <section>
            <h2>Reset Your Password</h2>
          </section>
          <div className="card-body">
            {error && <p className="text-red-700">{error?.message}</p>}
            <form onSubmit={handlePasswordReset}>
              <div className="form-control w-full max-w-xs my-4">
                <label className="label">
                  <span className="label-text">Enter your email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email..."
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <input
                className="btn btn-accent w-full max-w-xs text-white"
                type="submit"
                value={sending ? "Sending..." : "Send"}
              />
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PasswordReset;
