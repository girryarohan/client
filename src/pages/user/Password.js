import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

function Password() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // console.log(password);
    //firebase will give current user
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        // when successful updation of password
        setLoading(false);
        toast.success("Updated your password");
        // cleanup input field password after updation
        setPassword("");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.message);
        console.log("UPDATE PASSWORD ERROR: ", err);
      });
  };
  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-goup">
        <label>Your Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter new password"
          disabled={loading}
          value={password}
        />
        {/* very clever move here - in above input i kept disabled loading beacause
         From the moment user submits a password - and it successfully updates in db
         in mean time user should not play with password input (it can create a mess)
         to avoid this i kept disabled true while loading
         similary in below code - submit button should be available on when user has entered pass
         word in above input and loading is false - so that user cannot go crazy and click submit 
         multiple times and mess the request */}
        <button
          className="btn btn-primary"
          disabled={!password || password.length < 6 || loading}
        >
          Submit
        </button>
      </div>
    </form>
  );
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <UserNav />
        </div>
        <div className="col">
          {loading ? (
            <h4 className="text-info">Updating the Password...</h4>
          ) : (
            <h4>Password Update</h4>
          )}
          {passwordUpdateForm()}
        </div>
      </div>
    </div>
  );
}

export default Password;
