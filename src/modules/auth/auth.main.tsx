import React, { Component } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import config from "../../config/config";
import Login from "./pages.login";
import Signup_0001 from "./pages.signup";
// import Cookies from 'js-cookie';

interface IState {
  currentSignin: boolean;
  currentSignup?: boolean;
}

const initialState: IState = {
  currentSignin: true,
  currentSignup: false,
};

interface IProps {
  history: RouteComponentProps["history"];
}

export default class login_signup extends Component<IProps, IState> {
  state = initialState;


  render() {
    return (
      <div className="page-has-left-panels page-has-right-panels">
        <div id="hellopreloader">
          <div className="preloader">
            <svg width="45" height="45" stroke="#fff">
              <g
                fill="none"
                fillRule="evenodd"
                strokeWidth="2"
                transform="translate(1 1)"
              >
                <circle cx="22" cy="22" r="6" stroke="none">
                  <animate
                    attributeName="r"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="6;22"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="1;0"
                  />
                  <animate
                    attributeName="strokeWidth"
                    begin="1.5s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="2;0"
                  />
                </circle>
                <circle cx="22" cy="22" r="6" stroke="none">
                  <animate
                    attributeName="r"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="6;22"
                  />
                  <animate
                    attributeName="stroke-opacity"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="1;0"
                  />
                  <animate
                    attributeName="strokeWidth"
                    begin="3s"
                    calcMode="linear"
                    dur="3s"
                    repeatCount="indefinite"
                    values="2;0"
                  />
                </circle>
                <circle cx="22" cy="22" r="8">
                  <animate
                    attributeName="r"
                    begin="0s"
                    calcMode="linear"
                    dur="1.5s"
                    repeatCount="indefinite"
                    values="6;1;2;3;4;5;6"
                  />
                </circle>
              </g>
            </svg>
            <div className="text">Loading ...</div>
          </div>
        </div>
        {/* <!-- ... end Preloader -->
      <!-- ... end Responsive Header-BP --> */}
        <div className="header-spacer"></div>
        <div className="container">
          <div className="row">
            {/* <!-- Main Content --> */}
            <main className="col col-xl-12 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
              <div className="sign-in-page">
                <div className="signin-popup">
                  <div className="signin-pop">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="cmp-info">
                          <div className="cm-logo">
                            <div className="row">
                              <div className="col-md-4">
                                <img
                                  src="https://www.creative-tim.com/assets/logo/logo-ct-white-170d794e447f75aec55c6effdfbedced9dd268ceceece152675ff8f9891e3588.svg"
                                  alt=""
                                  style={{ height: "80%", width: "135%" }}
                                />
                              </div>
                              <div className="col-md-8">
                                <div className="loginlogo">
                                  <h1>
                                    <b> Theme Title </b>
                                  </h1>
                                </div>{" "}
                              </div>
                            </div>

                            <p>
                              Theme Description
                            </p>
                          </div>
                          <img src="//images/cm-main-img.png" alt="" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="login-sec" id="tile-1">
                          <ul className="sign-control">
                            <li
                              data-tab="tab-1"
                              className={
                                this.state.currentSignin ? "current" : ""
                              }
                            // onClick={this.signTab.bind(this, "signin")}
                            >
                              <a href="#" title="">
                                Sign In
                              </a>
                            </li>

                            <li
                              data-tab="tab-2"
                              className={
                                this.state.currentSignup ? "current" : ""
                              }
                            // onClick={this.signTab.bind(this, "signup")}
                            >
                              <a href="#" title="">
                                Sign up
                              </a>
                            </li>
                          </ul>
                          <div className={"sign_in_sec current"} id="tab-1">
                            <h3>Sign in</h3>
                            {/* //Conditionally display signin page */}
                            {this.state.currentSignin && (
                              <Login parentHistory={this.props.history} />
                            )}
                          </div>

                          <div className={"sign_in_sec current"} id="tab-2">
                            {this.state.currentSignup && <Signup_0001 />}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            {/* <!-- ... end Main Content --> */}
          </div>
        </div>
        {/* <!-- Window-popup Update Header Photo --> */}
        <div
          className="modal fade"
          id="update-header-photo"
          // tabIndex="-1"
          role="dialog"
          aria-labelledby="update-header-photo"
          aria-hidden="true"
        >
          <div
            className="modal-dialog window-popup update-header-photo"
            role="document"
          >
            <div className="modal-content">
              <a
                href="#"
                className="close icon-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon"></use>
                </svg>
              </a>
              <div className="modal-header">
                <h6 className="title">Update Header Photo</h6>
              </div>
              <div className="modal-body">
                <a href="#" className="upload-photo-item">
                  <svg className="olymp-computer-icon">
                    <use xlinkHref="#olymp-computer-icon"></use>
                  </svg>
                  <h6>Upload Photo</h6>
                  <span>Browse your computer.</span>
                </a>
                <a
                  href="#"
                  className="upload-photo-item"
                  data-bs-toggle="modal"
                  data-bs-target="#choose-from-my-photo"
                >
                  <svg className="olymp-photos-icon">
                    <use xlinkHref="#olymp-photos-icon"></use>
                  </svg>
                  <h6>Choose from My Photos</h6>
                  <span>Choose from your uploaded photos</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ... end Window-popup Update Header Photo -->
      <!-- Window-popup Choose from my Photo --> */}
        <div
          className="modal fade"
          id="choose-from-my-photo"
          // tabIndex="-1"
          role="dialog"
          aria-labelledby="choose-from-my-photo"
          aria-hidden="true"
        >
          <div
            className="modal-dialog window-popup choose-from-my-photo"
            role="document"
          >
            <div className="modal-content">
              <a
                href="#"
                className="close icon-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <svg className="olymp-close-icon">
                  <use xlinkHref="#olymp-close-icon"></use>
                </svg>
              </a>
              <div className="modal-header">
                <h6 className="title">Choose from My Photos</h6>
                {/* <!-- Nav tabs --> */}
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-expanded="true"
                    >
                      <svg className="olymp-photos-icon">
                        <use xlinkHref="#olymp-photos-icon"></use>
                      </svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-expanded="false"
                    >
                      <svg className="olymp-albums-icon">
                        <use xlinkHref="#olymp-albums-icon"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="modal-body">
                {/* <!-- Tab panes --> */}
                <div className="tab-content">
                  <div
                    className="tab-pane fade active show"
                    id="home"
                    role="tabpanel"
                    aria-expanded="true"
                  >
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo1.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo2.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo3.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo4.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo5.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo6.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo7.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo8.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <div className="choose-photo-item">
                      <div className="radio">
                        <label className="custom-radio">
                          <img
                            loading="lazy"
                            src="/img/choose-photo9.webp"
                            alt="photo"
                            width="247"
                            height="166"
                          />
                          <input type="radio" name="optionsRadios" />
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="btn btn-secondary btn-lg btn--half-width"
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-lg btn--half-width"
                    >
                      Confirm Photo
                    </a>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-expanded="false"
                  >
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo10.webp"
                          alt="photo"
                          width="225"
                          height="180"
                        />
                        <figcaption>
                          <a href="#">South America Vacations</a>
                          <span>Last Added: 2 hours ago</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo11.webp"
                          alt="photo"
                          width="225"
                          height="180"
                        />
                        <figcaption>
                          <a href="#">Photoshoot Summer 2016</a>
                          <span>Last Added: 5 weeks ago</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo12.webp"
                          alt="photo"
                          width="225"
                          height="180"
                        />
                        <figcaption>
                          <a href="#">Amazing Street Food</a>
                          <span>Last Added: 6 mins ago</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo13.webp"
                          alt="photo"
                          width="224"
                          height="179"
                        />
                        <figcaption>
                          <a href="#">Graffity & Street Art</a>
                          <span>Last Added: 16 hours ago</span>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo14.webp"
                          alt="photo"
                          width="225"
                          height="180"
                        />

                      </figure>
                    </div>
                    <div className="choose-photo-item">
                      <figure>
                        <img
                          loading="lazy"
                          src="/img/choose-photo15.webp"
                          alt="photo"
                          width="225"
                          height="180"
                        />

                      </figure>
                    </div>
                    <a
                      href="#"
                      className="btn btn-secondary btn-lg btn--half-width"
                    >
                      Cancel
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary btn-lg disabled btn--half-width"
                    >
                      Confirm Photo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ... end Window-popup Choose from my Photo --> */}

        {/* <!-- Window-popup-CHAT for responsive min-width: 768px --> */}
        <div
          className="ui-block popup-chat popup-chat-responsive"
          // tabIndex="-1"
          role="dialog"
          aria-labelledby="popup-chat-responsive"
          aria-hidden="true"
        >
          <div className="modal-content">
            <div className="modal-header">
              <span className="icon-status online"></span>
              <h6 className="title">Chat</h6>
              <div className="more">
                <svg className="olymp-three-dots-icon">
                  <use xlinkHref="#olymp-three-dots-icon"></use>
                </svg>
                <svg className="olymp-little-delete js-chat-open">
                  <use xlinkHref="#olymp-little-delete"></use>
                </svg>
              </div>
            </div>
            <div className="modal-body">
              <div className="mCustomScrollbar">
                <ul className="notification-list chat-message chat-message-field">
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="/img/avatar14-sm.webp"
                        width="28"
                        height="28"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="/img/author-page.webp"
                        width="36"
                        height="36"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Don’t worry Mathilda!
                      </span>
                      <span className="chat-message-item">
                        I already bought everything
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:29pm
                        </time>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div className="author-thumb">
                      <img
                        loading="lazy"
                        src="/img/avatar14-sm.webp"
                        width="28"
                        height="28"
                        alt="author"
                        className="mCS_img_loaded"
                      />
                    </div>
                    <div className="notification-event">
                      <span className="chat-message-item">
                        Hi James! Please remember to buy the food for tomorrow!
                        I’m gonna be handling the gifts and Jake’s gonna get the
                        drinks
                      </span>
                      <span className="notification-date">
                        <time
                          className="entry-date updated"
                          dateTime="2004-07-24T18:18"
                        >
                          Yesterday at 8:10pm
                        </time>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <form className="need-validation">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Press enter to post..."
                  ></textarea>
                  <div className="add-options-message">
                    <a href="#" className="options-message">
                      <svg className="olymp-computer-icon">
                        <use xlinkHref="#olymp-computer-icon"></use>
                      </svg>
                    </a>
                    <div className="options-message smile-block">
                      <svg className="olymp-happy-sticker-icon">
                        <use xlinkHref="#olymp-happy-sticker-icon"></use>
                      </svg>
                      <ul className="more-dropdown more-with-triangle triangle-bottom-right">
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat1.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat2.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat3.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat4.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat5.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat6.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat7.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat8.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat9.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat10.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat11.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat12.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat13.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat14.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat15.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat16.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat17.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat18.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat19.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat20.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat21.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat22.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat23.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat24.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat25.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat26.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <img
                              loading="lazy"
                              src="/img/icon-chat27.webp"
                              alt="icon"
                              width="20"
                              height="20"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
