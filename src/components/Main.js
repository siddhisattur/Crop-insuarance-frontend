import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useHistory, withRouter } from 'react-router-dom';
import '../Assets/css/Main.css'
import Farmer from './Users/Farmer';
import Customer from './Users/Customer';
import Policy from './Users/Policy';
import LoginModel from './Models/LoginModel';
import RegisterModel from './Models/RegisterModel';

function Main() {
    const navigate = useNavigate();

    const goToAnotherPage = () => {
        navigate('./register');
    };

   

    return (
        <div>
            <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
                <div className="col-xl-6 col-lg-6" style={{ marginTop: 180 }}>
                    <div className="card shadow mb-4 m-2">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#F0EAD2" }}>
                            <h3 className="m-0 font-weight-bold text-success">Welcome to Crop Insuarance & Traceability System</h3>
                        </div>
                        <div className="card-body d-flex justify-content-center p-4" style={{ backgroundColor: "#d8f3dc" }}>
                            <div className="p-4">
                                {/* <Link to="/register">
                                    <button className="btn btn-success">Get Started</button>
                                </Link> */}
                                <button className="btn btn-success" onClick={goToAnotherPage}>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Main;

