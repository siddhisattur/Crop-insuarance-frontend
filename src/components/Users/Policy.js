import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/FormField'
import FormField from '../layouts/FormField';
import '../../Assets/css/Models/LoginModel.css'
import 'bootstrap/dist/css/bootstrap.css';

const Policy = () => {

    const [policycompanyname, setPolicyCompanyName] = useState();
    const [policynumber, setPolicyNumber] = useState();
    const [policyname, setPolicyName] = useState();
    const [amtofinsuranceclaim, setAmtOfInsuranceClaim] = useState();
    const [applicationnumber, setApplicationNumber] = useState();


    return (
        <div>
            <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
                <div className="col-xl-8 col-lg-6">
                    <div className="card shadow mb-4 m-2">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#F0EAD2" }}>
                            <h3 className="m-0 font-weight-bold text-success">Policy Company</h3>
                        </div>
                        <div className="card-body" style={{ backgroundColor: "#d8f3dc" }}>
                            <form className="col-lg-12">


                                <div className="d-flex">
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="policycompanyname"
                                            name="policycompanyname"
                                            placeholder="Enter your Company Name"
                                            requiredInd={true}
                                            label="Company Name:"
                                            value={policycompanyname}
                                            onChange={(e) => setPolicyCompanyName(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="policyname"
                                            name="policyname"
                                            placeholder="Enter your Policy Name"
                                            requiredInd={true}
                                            label="Policy Name:"
                                            value={policyname}
                                            onChange={(e) => setPolicyName(e.target.value)}
                                        />
                                    </div>


                                </div>

                                <div className="d-flex">
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="policynumber"
                                            name="policynumber"
                                            placeholder="Enter your Policy Number"
                                            requiredInd={true}
                                            label="Policy Number:"
                                            value={policynumber}
                                            onChange={(e) => setPolicyNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="amtofinsuranceclaim"
                                            name="amtofinsuranceclaim"
                                            placeholder="Enter Amount of Insurance Claim"
                                            requiredInd={true}
                                            label="Amount of Insurance Claim:"
                                            value={amtofinsuranceclaim}
                                            onChange={(e) => setAmtOfInsuranceClaim(e.target.value)}
                                        />
                                    </div>

                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">
                                    <button type="button" class="btn btn-success">Add your Policy</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
                <div className="col-xl-8 col-lg-6">
                    <div className="card shadow mb-4 m-2">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#F0EAD2" }}>
                            <h3 className="m-0 font-weight-bold text-success">Get Farmer Details</h3>
                        </div>
                        <div className="card-body" style={{ backgroundColor: "#d8f3dc" }}>
                            <form className="col-lg-12">


                                <div className="d-flex">
                                    <div className="col-lg-12 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="applicationnumber"
                                            name="applicationnumber"
                                            placeholder="Enter Farmer's Application Number"
                                            requiredInd={true}
                                            label="Farmer's Application Number:"
                                            value={applicationnumber}
                                            onChange={(e) => setApplicationNumber(e.target.value)}
                                        />
                                    </div>


                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">
                                    <button type="button" class="btn btn-success">Get Farmer Details</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Policy;