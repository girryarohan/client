import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

function RegisterComplete({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("emailForRegistration"));
    console.log(window.location.href);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // do not reload browser

    // validation
    if (!email || !password) {
      toast.error("Email and password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      // following will check if the user email is verified or not
      // so that unathorized access to page and unathorized email cannot set its password
      if (result.user.emailVerified) {
        // remove user email from local storage
        window.localStorage.removeItem("emailForRegistration");
        // get user id token
        let user = auth.currentUser;
        await user.updatePassword(password);
        const idTokenResult = await user.getIdTokenResult();

        // redux store

        //redirect
        history.push("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  const completeRegistrationForm = () => (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <input type="email" className="form-control" value={email} autoFocus />
        {/* disabled not added to email input to prevent deadlock because of browser local storage cache clear*/}
        {/* eg. if user enters email and clears browser cache and come back via email link then email will be undefined */}
        <input
          type="password"
          className="form-control"
          value={password}
          autoFocus
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter New Password"
        />
      </div>
      <button type="submit" className="btn btn-raised">
        Complete
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Complete Registration</h4>

          {completeRegistrationForm()}
        </div>
      </div>
    </div>
  );
}

export default RegisterComplete;
