import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/FormField'
import FormField from '../layouts/FormField';
import '../../Assets/css/Models/LoginModel.css'
import 'bootstrap/dist/css/bootstrap.css';

const LoginModel = () => {

    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [mail, setMail] = useState();
    const [number, setNumber] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [pincode, setPinCode] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();

    

    return(
        <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
            <div className="col-xl-4 col-lg-6" style={{marginTop:180}}>
                <div className="card shadow mb-4 m-2">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{backgroundColor:"#F0EAD2"}}>
                        <h3 className="m-0 font-weight-bold text-success">LOGIN</h3>
                    </div>
                    <div className="card-body" style={{backgroundColor:"#d8f3dc"}}>
                        <form className="col-lg-12">
                            
                            
                            <div className="d-flex">
                                <div className="col-lg-12 p-1">

                                    <FormField
                                        fieldName="TextInput"
                                        id="mail"
                                        name="mail"
                                        placeholder="Enter your E-mail ID"
                                        requiredInd={true}
                                        label="E-mail ID:"
                                        value={mail}
                                        onChange={(e) => setMail(e.target.value)}
                                    />
                                </div>
                                

                            </div>
                            
                            <div className="d-flex">
                                <div className="col-lg-12 p-1">

                                    <FormField
                                        fieldName="TextInput"
                                        id="password"
                                        name="password"
                                        placeholder="Enter New Password"
                                        requiredInd={true}
                                        label="Password:"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                
                            </div>
                            <div className="d-flex mt-4 justify-content-center mb-3">
                                <button type="button" class="btn btn-success">Login to your Account</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default LoginModel;
