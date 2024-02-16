import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
//import config from '../../config'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // get user inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("USER");

  // this function is used to navigate from one component to another programmatically
  // userNavigate() returns a function reference
  const navigate = useNavigate();

  const signup = () => {
    // check if user has really entered any value
    if (firstName.length === 0) {
      toast.error("please enter first name");
    } else if (lastName.length === 0) {
      toast.error("please enter last name");
    } else if (email.length === 0) {
      toast.error("please enter email");
    } else if (mobileNo.length === 0) {
      toast.error("please enter phone number");
    } else if (password.length === 0) {
      toast.error("please enter password");
    } else {
      // make the API call to check if user exists
      axios
        .post("http://localhost:8080/parkifyUserFunctions/signUp", {
          firstName,
          lastName,
          email,
          password,
          mobileNo,
          userRole,
        })
        .then((response) => {
          // get the data returned by server
          const result = response.data;

          // check if user's authentication is successfull
          if (result["status"] === "error") {
            toast.error("invalid email or password");
          } else {
            toast.success("successfully registered a new user");

            // navigate to the singin page
            navigate("/signIn");
          }
        })
        .catch((error) => {
          console.log("error");
          console.log(error);
        });
    }
  };

  return (
    <div style={{ marginTop: 100 }}>
      <div style={styles.container}>
        <div className="mb-3">
          <label>First Name</label>
          <input
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            onChange={(event) => {
              setLastName(event.target.value);
            }}
            className="form-control"
            type="text"
          />
        </div>

        <div className="mb-3">
          <label>Mobile Number</label>
          <input
            onChange={(event) => {
              setMobileNo(event.target.value);
            }}
            className="form-control"
            type="tel"
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="form-control"
            type="email"
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="form-control"
            type="password"
          />
        </div>

        {/* <div className='mb-3'>
          <label>Confirm Password</label>
          <input
            onChange={(event) => {
              setConfirmPassword(event.target.value)
            }}
            className='form-control'
            type='password'
          />
        </div> */}

        <div className="mb-3" style={{ marginTop: 40 }}>
          <div>
            Already have an account? <Link to="/signin">Signin here</Link>
          </div>
          <button onClick={signup} style={styles.signinButton}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#e6ffff",

    color: "black",
    width: 400,
    height: 550,
    padding: 10,
    position: "relative",
    top: 10,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    borderColor: "black",
    borderRadius: 10,
    broderWidth: 1,
    borderStyle: "solid",
    boxShadow: "1px 1px 20px 5px #C9C9C9",
  },
  table: {
    color: "blue",
    textAlign: "center",
  },
  signinButton: {
    position: "relative",
    width: "100%",
    height: 40,
    backgroundColor: "#db0f62",
    color: "white",
    borderRadius: 5,
    border: "none",
    marginTop: 10,
  },
};
export default Signup;
