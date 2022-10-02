import React, { Component, } from "react";
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
import { RouteComponentProps, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';



interface IState {
  username?: string
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
  // parentHistory: RouteComponentProps["history"]
  history: any
}

// type LoginProps = RouteComponentProps & IProps

//WIP
class Login extends Component<IProps, IState> {
  // const getInitialHealth = (props: IProps) => props.superhero === "Spiderman" ? 0 : 100;
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorCallback: (key, value) => {
        this.setState({
          [key]: value,
        });
      },
      loginFormError: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.AS.isAuthenticated) {
      this.props.history.push("/admin/dashboard");
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.AS.isAuthenticated) {
      this.props.history.push("/admin/dashboard");
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      "loginFormError": [],
    });
  }

  //================================================  Login API integrate  =============

  async onSubmit(e) {
    e.preventDefault();
    const data = this.state;
    e.preventDefault();
    console.log("onSubmit called");
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    this.props.signIn(userData, this.state.errorCallback);
  }

  render() {
    return (
      <div className="container mt--8 pb-5 mt-6">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card bg-secondary border-0 mb-0">

              <div className="card-body px-lg-5 py-lg-5">
                <div className="text-center text-muted mb-4">
                  <small>Sign in with credentials</small>
                </div>
                <form
                  onSubmit={this.onSubmit}
                  className="needs-validation">
                  <div className="form-group mb-3">
                    <div className="input-group input-group-merge input-group-alternative ">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ni ni-circle-08"></i>
                        </span>
                      </div>
                      <input
                        className={"form-control"}
                        placeholder="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.onChange}
                        name="username"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group input-group-merge input-group-alternative">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="ni ni-lock-circle-open"></i>
                        </span>
                      </div>
                      <input
                        className={classnames("form-control", {
                          "is-invalid": !isEmpty(
                            this.state.loginFormError!)
                            ? true
                            : null


                        })}
                        placeholder="Password"
                        type="password"
                        onChange={this.onChange}
                        name="password"
                        value={this.state.password}
                        required
                      />

                    </div>
                  </div>

                  <div className="custom-control custom-control-alternative custom-checkbox">

                  </div>
                  <div className=" text-danger text-center">

                    {
                      this.state.loginFormError?.length != 0 ? this.state.loginFormError![0][1] : null
                    }

                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-purple my-4">
                      Sign in

                      {" "}
                      {this.props.LS.waitingFor.includes(
                        "SILoading"
                      ) ? (
                        <Spinner />
                      ) : null}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-3">

              {/* //FORGOT PASSWORD */}
              {/* <div className="col-6">
                <Link to="/auth/login" class=" text-light">
                  <small>Forgot password?</small>
                </Link>
              </div> */}
              {/* CREATE NEW ACCOUNT */}
              {/* <div class="col-6 text-right">
                                    <a href="#img" class="text-light"><small>Create new account</small></a>
                                </div> */}
            </div>
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state) => ({
  AS: state.authStore,
  LS: state.loadingStore
});

export default connect(mapStateToProps, { signIn })(Login);
