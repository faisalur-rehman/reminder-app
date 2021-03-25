import React from "react";
import { Link, useHistory } from "react-router-dom";

import { AppError, AppField, AppForm } from "../../components/app-form";
import { UserContext } from "../../context/user_context";
import { registrationSchema } from "../../utils/validations";

import "./style.css";

const RegisterScreen = () => {
  const user = React.useContext(UserContext);
  const history = useHistory();
  const [isError, setIsError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleRegister = ({ formValues }) => {
    const isUserCreated = user.handleRegister(formValues);
    console.log(isUserCreated);

    if (isUserCreated) {
      history.push("/login");
      return;
    } else {
      setIsError(true);
      setIsSubmitting(true);
    }
  };

  return (
    <div className="auth-main-content">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center font-weight-bold">
                Sign Up
              </h5>
              <AppForm
                initialValues={userInitialValue}
                validationSchema={registrationSchema}
                handleSubmit={handleRegister}
              >
                <div className="form-label-group">
                  <AppField type="text" field="name" placeholder="Username" />
                  <label htmlFor="name">Username</label>
                  <AppError field="name" />
                </div>

                <div className="form-label-group">
                  <AppField type="email" field="email" placeholder="Username" />
                  <label htmlFor="email">Email Address</label>
                  <AppError field="email" />
                </div>

                <div className="form-label-group">
                  <AppField
                    type="password"
                    field="password"
                    placeholder="Password"
                  />
                  <label htmlFor="password">Password</label>
                  <AppError field="password" />
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Sign Up
                </button>
                {isError && isSubmitting && (
                  <p className="my-2 text-center" style={{ color: "red" }}>
                    Email already exists. Please try with different email ..
                  </p>
                )}
                <hr className="my-4" />
                <p>
                  <span>Already have an account</span> ?{" "}
                  <span className="font-weight-bold font-italic">
                    <Link to="/login">SignIn</Link>
                  </span>
                </p>
              </AppForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;

const userInitialValue = {
  name: "",
  email: "",
  password: "",
};
