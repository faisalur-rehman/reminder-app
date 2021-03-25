import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AppError, AppField, AppForm } from "../../components/app-form";

import { UserContext } from "../../context/user_context";
import { LoginSchema } from "../../utils/validations";

import "./style.css";

const LoginScreen = () => {
  const history = useHistory();
  const user = React.useContext(UserContext);
  const [isError, setIsError] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleLogin = ({ formValues }) => {
    const isAuth = user.handleLogin(formValues);

    if (isAuth) {
      history.replace("/");
      return;
    }

    setIsError(true);
    setIsSubmitting(true);
  };

  return (
    <div className="auth-main-content">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto my-5">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center font-weight-bold">
                Sign In
              </h5>
              <AppForm
                initialValues={userInitialValue}
                validationSchema={LoginSchema}
                handleSubmit={handleLogin}
              >
                <div className="form-signin">
                  <div className="form-label-group">
                    <AppField type="email" field="email" placeholder="Email" />
                    <label htmlFor="email">Email address</label>
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
                    Sign in
                  </button>
                  {isError && isSubmitting && (
                    <p className="my-2 text-center" style={{ color: "red" }}>
                      Your credentials doesn't match ..
                    </p>
                  )}
                  <hr className="my-4" />
                  <p>
                    <span>Don't have an account</span> ?{" "}
                    <span className="font-weight-bold font-italic">
                      <Link to="/register">SignUp</Link>
                    </span>
                  </p>
                </div>
              </AppForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;

const userInitialValue = {
  email: "",
  password: "",
};
