import React, { Component } from "react";
import axios from "axios";
import config from "../../config/config";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import { signIn } from "./auth.action";
import { connect } from "react-redux";
import classnames from "classnames";
import "react-toastify/dist/ReactToastify.css";
import { isEmpty } from "lodash";
import Spinner from "../../utils/Spinner";
import { RouteComponentProps } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



interface IState {
  email?: string
  password?: string
  errorCallback?: Function
  loginFormError?: Array<any>
}

interface IProps {
  //Prop types to be added
  auth?: any
  signIn?: any
  AS?: any
  LS?: any
  parentHistory: RouteComponentProps["history"]
}

// type LoginProps = RouteComponentProps & IProps

//WIP
class Login extends Component<IProps, IState> {
  // const getInitialHealth = (props: IProps) => props.superhero === "Spiderman" ? 0 : 100;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorCallback: (key, value) => {
        this.setState({
          [key]: value,
        });
      },
      loginFormError: []
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    // if (this.props.AS.isAuthenticated) {
    //   this.props.parentHistory.push("/timeline");
    // }
  }

  getSnapshotBeforeUpdate(prevProps) {
    // if (this.props.AS.isAuthenticated) {
    //   this.props.parentHistory.push("/timeline");
    // }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name.concat("error")]: "",
    });
  }

  //================================================  Login API integrate  =============

  async submitForm(e) {
    e.preventDefault();
    const data = this.state;
    e.preventDefault();
    console.log("onSubmit called");
    const userData = {
      email: this.state.email,
      password: this.state.password,
      signinAuthType: "EMAIL",
      role: "USER"
    };

    this.props.signIn(userData, this.state.errorCallback);
  }

  render() {
    return (
      <>
        <form onSubmit={this.submitForm}>
          {/* <ToastContainer /> */}
          <div className="row">
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  className={classnames("form-control", {
                    "is-invalid": !isEmpty(
                      this.state.loginFormError?.filter((item) =>
                        item[0].includes("email") ? item : null
                      )
                    ),
                  })}
                  type="text"
                  value={this.state.email}
                  onChange={this.onChange}
                  autoComplete="off"
                  name="email"
                  placeholder="Username"
                />
                <i className="fa fa-user"></i>

                {
                  !isEmpty(
                    this.state.loginFormError?.filter((item) =>
                      item[0].includes("email")
                        ? item
                        : null
                    )
                  )
                  &&
                  <div className="invalid-feedback">
                    {
                      this.state.loginFormError?.filter((item) =>
                        item[0].includes("email") ? item : null
                      )[0][1]
                    }
                  </div>
                }
              </div>
            </div>
            <div className="col-lg-12 no-pdd">
              <div className="sn-field">
                <input
                  className={classnames("form-control", {
                    "is-invalid": !isEmpty(
                      this.state.loginFormError?.filter((item) =>
                        item[0].includes("password") ? item : null
                      )
                    ),
                  })}
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  autoComplete="off"
                  name="password"
                  placeholder="Password"
                />
                <i className="fa fa-lock"></i>

                {
                  !isEmpty(
                    this.state.loginFormError?.filter((item) =>
                      item[0].includes("password")
                        ? item
                        : null
                    )
                  )
                  &&
                  <div className="invalid-feedback">
                    {
                      this.state.loginFormError?.filter((item) =>
                        item[0].includes("password") ? item : null
                      )[0][1]
                    }
                  </div>
                }
              </div>
            </div>
            {/* <div className="col-lg-12 no-pdd">
                     <div className="checky-sec">
                        <div className="fgt-sec">
                           <input type="checkbox" name="cc" id="c1" />
                           <label htmlFor="c1">
                              <span></span>
                           </label>
                           <small>Remember me</small>
                        </div>
                        <a href="#" title="">Forgot Password?</a>
                     </div>
                  </div> */}
            <div className="col-lg-12 no-pdd">

              <button type="submit" className={classnames((!this.state.email && this.state.password) ? "disabled_form" : "")}
                disabled={!this.state.email && !this.state.password}>

                {this.props.LS.waitingFor.includes(
                  "SILoading"
                ) ? (
                  <Spinner />
                ) : null}
                {"  "}
                Sign in
              </button>

            </div>
          </div>
        </form>
        {/* <div className="login-resources">
               <h4>Login Via Social Account</h4>
               <ul>
                  <li><a href="#" title="" className="fb"><i className="fa fa-facebook"></i>Login Via Facebook</a></li>
                  <li><a href="#" title="" className="tw"><i className="fa fa-twitter"></i>Login Via Twitter</a></li>
               </ul>
            </div> */}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  AS: state.authStore,
  LS: state.loadingStore
});

export default connect(mapStateToProps, { signIn })(Login);
