import React, { Component } from 'react';
import axios from 'axios';
import config from '../../config/config'
import { ToastContainer, toast } from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import 'react-toastify/dist/ReactToastify.css';
import $ from 'jquery'
const headers = {
    'Content-Type': 'application/json'
};

interface IState  {
   fname?: string,
   lname?: string,
   userName?: string,
   email?: string,
   gender?: string,
   dob?: string,
   account_type?: string,
   mobileNumber?: string,
   password?: string,
   password2?: string,
   confirmPasswordCheck?: string,
   passwordLength2?: string,
   passwordLength?: string,
   getUserCateg?: Array<any>
}
// const notify = () => toast("Wow so easy!");
const initialState:IState = {
   fname: '',
   lname: '',
   userName: '',
   email: '',
   gender: '',
   dob: '',
   account_type: '2',
   mobileNumber: '',
   password: '',
   password2: '',
   confirmPasswordCheck: '0',
   passwordLength2: '0',
   passwordLength: '0',
   getUserCateg: []

}
//WIP
export default class Signup extends Component<IState> {

   readonly state = initialState

    constructor(props) {
        super(props)


    
        this.onChange = this.onChange.bind(this);

        this.submitForm = this.submitForm.bind(this);
    }

    componentDidMount() {
        this.getusercategory()
        // alert('324')
        // toast("Wow so easy!")
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'password') {
            if (e.target.value.length < 7) {
                this.setState({
                    passwordLength: '1'
                })
            }
            else {
                this.setState({
                    passwordLength: '0'
                })
            }



        }

        if (e.target.name === 'password2') {
            if (e.target.value.length < 7) {
                this.setState({
                    passwordLength2: '1'
                })
            }
            else {
                this.setState({
                    passwordLength2: '0'
                })
            }



        }


        if (e.target.name === 'userName') {
            const mediumRegex = new RegExp("^(?=.*[A-Z])|(?=.*[0-9])|(?=.*[+=,?/|\`~!{}#\$%\^&\*])");
            if (mediumRegex.test(e.target.value)) {
                return false;
            }
            // this.setState({
            //     userName:e.target.value
            // })
        }

    }

    //======================================  Signup API  ======================

    async submitForm(e) {
        e.preventDefault()

        const data = this.state
      
        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        axios.post(`${config.apiUrl}/register`, data, { headers })
            .then(response => {


                if (response.data.success === true) {
                    toast.success(response.data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
                    setTimeout(() => {

                        window.location.reload()
                    }, 2000);

                }

                else if (response.data.success === false) {
                    toast.error(response.data.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });


                }
                $('#main_loader').hide();
                $('#root').css('opacity', '1');
            })

            .catch(err => {

                toast.error(err.response.data?.msg, {
                    position: toast.POSITION.TOP_CENTER
                });

            })
    }


    //======================================  getusercategory API  ======================

    async getusercategory() {

        $('#main_loader').show();
        $('#root').css('opacity', '0.5');
        axios.get(`${config.apiUrl}/getusercategory`, {})
            .then(response => {


                if (response.data.success === true) {
                    this.setState({

                        getUserCateg: response.data.response
                    })
                    console.log(this.state.getUserCateg);

                }

                else if (response.data.success === false) {

                }
                $('#main_loader').hide();
                $('#root').css('opacity', '1');
            })

            .catch(err => {

               //  toast.error(err.response.data?.msg, {
               //      position: toast.POSITION.TOP_CENTER
               //  });

            })
    }



    render() {
        // alert(this.state.fname)
        if (this.state.password != this.state.password2) {

            this.state.confirmPasswordCheck = '1'

        }
        else {

            this.state.confirmPasswordCheck = '0'

        }

        return (
            <>
                <div className="dff-tab current" id="tab-3">
                    <form onSubmit={this.submitForm}>
                        <div className="row">
                            {/* <button onClick={notify}>Notify!</button> */}
                            <ToastContainer />

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" value={this.state.fname}
                                        onChange={this.onChange} autoComplete="off" name="fname" placeholder="First Name" />
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" value={this.state.lname}
                                        onChange={this.onChange} autoComplete="off" name="lname" placeholder="Last Name" />
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" value={this.state.userName}
                                        onChange={this.onChange} name="userName" placeholder="User name" />
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="email" value={this.state.email}
                                        onChange={this.onChange} autoComplete="off" name="email" placeholder="Email" />
                                    <i className="fa fa-user"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="date" value={this.state.dob}
                                        onChange={this.onChange} name="dob" />
                                    <i className="fa fa-calendar"></i>
                                </div>
                            </div>
                            {/* <Loader tyle={{
                                position: "absolute",
                                zIndex: '99999',
                                left: "40%",
                                top: "10%"
                            }}
                                type="Puff"
                                color="#00BFFF"
                                height={100}
                                width={100}
                                timeout={300000} //3 secs
                            /> */}
                            <div className="col-lg-12 no-pdd signup_form_gender">
                                <div className="col-lg-12 no-pdd">
                                    <div className="checky-sec_login">
                                        <ul className="avail-checks">
                                            <div className="fgt-sec col-lg-4">
                                                <li>
                                                    <input type="radio" onChange={this.onChange} name="gender" value="1" id="c1" />
                                                    <label htmlFor="c1">
                                                        <span></span>
                                                    </label>
                                                    <small>Male</small>
                                                </li>
                                            </div>
                                            <div className="fgt-sec ">
                                                <li>
                                                    <input type="radio" onChange={this.onChange} name="gender" value="0" id="c2" />
                                                    <label htmlFor="c2">
                                                        <span></span>
                                                    </label>
                                                    <small>Female</small>
                                                </li>
                                            </div>
                                        </ul>

                                    </div>
                                </div>
                            </div>


                            {/* <div className="col-lg-12 no-pdd signup_form_gender">
                                <div className="col-lg-12 no-pdd">
                                    <div className="checky-sec_login">
                                        <ul className="avail-checks">
                                            <div className="fgt-sec col-lg-4">
                                                <li>
                                                    <input type="radio" onChange={this.onChange} name="account_type" value="1" id="c3" />
                                                    <label htmlFor="c3">
                                                        <span></span>
                                                    </label>
                                                    <small>Public</small>
                                                </li>
                                            </div>
                                            <div className="fgt-sec ">
                                                <li>
                                                    <input type="radio" onChange={this.onChange} name="account_type" value="2" id="c4" />
                                                    <label htmlFor="c4">
                                                        <span></span>
                                                    </label>
                                                    <small>Private</small>
                                                </li>
                                            </div>
                                        </ul>

                                    </div>
                                </div>
                            </div> */}

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" value={this.state.mobileNumber}
                                        onChange={this.onChange} autoComplete="off" name="mobileNumber" placeholder="Mobile Number" />
                                    <i className="fa fa-mobile"></i>
                                </div>
                            </div>

                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" value={this.state.password}
                                        onChange={this.onChange} autoComplete="off" name="password" placeholder="Password" />
                                    <i className="fa fa-lock"></i>
                                </div>
                                {this.state.passwordLength === '1' ? <p className="errorMessage">Password length should be greater than 6</p> : ''}
                                {this.state.confirmPasswordCheck === '1' ? <p className="errorMessage">Password Not match</p> : ''}


                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" value={this.state.password2}
                                        onChange={this.onChange} autoComplete="off" name="password2" placeholder="Repeat Password" />
                                    <i className="fa fa-lock"></i>
                                </div>
                                {this.state.passwordLength2 === '1' ? <p className="errorMessage">Password length should be greater than 6</p> : ''}
                                {this.state.confirmPasswordCheck === '1' ? <p className="errorMessage">Password Not match</p> : ''}

                            </div>
                            {/* <div className="col-lg-12 no-pdd">
                                <div className="checky-sec st2">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c2" />
                                        <label htmlFor="c2">
                                            <span></span>
                                        </label>
                                        <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-12 no-pdd">
                                {!this.state.fname || !this.state.lname || !this.state.userName || !this.state.email || !this.state.gender || !this.state.mobileNumber || !this.state.dob || !this.state.account_type 
                              //   || this.state.password.length < 7 || this.state.password2.length < 7 
                                ?
                                    <button type="submit" className="disabled_form" disabled >Sign up</button>
                                    : <button type="submit" >Sign up</button>}

                            </div>
                        </div>
                    </form>
                </div>
                <div className="dff-tab" id="tab-4">
                    <form>
                        <div className="row">
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" name="company-name" placeholder="Company Name" />
                                    <i className="fa fa-building"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="text" name="country" placeholder="Country" />
                                    <i className="fa fa-globe"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="password" placeholder="Password" />
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="sn-field">
                                    <input type="password" name="repeat-password" placeholder="Repeat Password" />
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <div className="checky-sec st2">
                                    <div className="fgt-sec">
                                        <input type="checkbox" name="cc" id="c3" />
                                        <label htmlFor="c3">
                                            <span></span>
                                        </label>
                                        <small>Yes, I understand and agree to the workwise Terms &amp; Conditions.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 no-pdd">
                                <button type="submit" value="submit">Get Started</button>
                            </div>
                        </div>
                    </form>
                </div>

            </>
        )

    }
}