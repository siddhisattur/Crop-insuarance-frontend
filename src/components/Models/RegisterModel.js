import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../layouts/FormField';
import '../../Assets/css/Models/RegisterModel.css'
import 'bootstrap/dist/css/bootstrap.css';  



const RegisterModel = () => {

    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [mail, setMail] = useState();
    const [number, setNumber] = useState();
    const [state, setState] = useState();
    const [city, setCity] = useState();
    const [pincode, setPinCode] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmPassword] = useState();
    const [selectedOption, setSelectedOption] = useState('');
    const [error, setError] = useState('');
    const formRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
    
        
        if (!mail || !number) {
          setError('Please fill all the details.');
          return;
        }
    };

    setError('');

    switch (selectedOption) {
      case 'farmer':
        navigateTo('/farmer');
        break;
      case 'policycompany':
        navigateTo('/policycompany');
        break;
      case 'customer':
        navigateTo('/customer');
        break;
      default:
        break;
    }


const navigateTo = (path) => {
    formRef.current.submit();
    window.location.href = path;
};

return (
    <div className="main m-1 mt-4 d-flex justify-content-center align-items-center">
        <div className="col-xl-6 col-lg-6" style={{ marginTop: 50 }}>
            <div className="card shadow mb-4 m-2">
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#F0EAD2" }}>
                    <h3 className="m-0 font-weight-bold text-success">REGISTER</h3>
                </div>
                <div className="card-body" style={{ backgroundColor: "#d8f3dc" }}>
                    <form className="col-lg-12" ref={formRef} onSubmit={handleSubmit}
>

                        <div className="d-flex align-items-center justify-content-center ">
                            <div className="btn-group btn-group-toggle" data-toggle="buttons" style={{ marginBottom: "30px", alignContent: "center", marginTop: "10px" }}>
                                <label
                                    htmlFor='farmer'
                                    className={`btn ${selectedOption === 'farmer' ? 'btn-success active' : 'btn-outline-success'}`}
                                >
                                    <input
                                        type="radio"
                                        name="options"
                                        id="farmer"

                                        style={{ display: 'none' }}
                                        value="farmer"
                                        checked={selectedOption === 'farmer'}
                                        onChange={() => setSelectedOption('farmer')}
                                    />
                                    Farmer
                                </label>

                                <label
                                    htmlFor='policycompany'
                                    className={`btn ${selectedOption === 'policycompany' ? 'btn-success active' : 'btn-outline-success'}`}
                                >
                                    <input
                                        type="radio"
                                        name="options"
                                        id="policycompany"

                                        style={{ display: 'none' }}
                                        value="policycompany"
                                        checked={selectedOption === 'policycompany'}
                                        onChange={() => setSelectedOption('policycompany')}
                                    />
                                    Policy Company
                                </label>
                                <label
                                    htmlFor='customer'
                                    className={`btn ${selectedOption === 'customer' ? 'btn-success active' : 'btn-outline-success'}`}
                                >
                                    <input
                                        type="radio"
                                        name="options"
                                        id="customer"
                                    
                                        style={{ display: 'none' }}
                                        value="customer"
                                        checked={selectedOption === 'customer'}
                                        onChange={() => setSelectedOption('customer')}
                                    />
                                    Customer
                                </label>

                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col-lg-6 p-1">
                                <FormField
                                    fieldName="TextInput"
                                    id="firstname"
                                    name="firstname"
                                    placeholder="Enter your First Name"
                                    requiredInd={true}
                                    label="First Name:"
                                    value={firstname}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />

                            </div>
                            <div className="col-lg-6 p-1">
                                <FormField
                                    fieldName="TextInput"
                                    id="lastname"
                                    name="lastname"
                                    placeholder="Enter your Last Name"
                                    requiredInd={true}
                                    label="Last Name:"
                                    value={lastname}
                                    onChange={(e) => setLastName(e.target.value)}
                                />

                            </div>

                        </div>
                        <div className="d-flex">
                            <div className="col-lg-6 p-1">

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
                            <div className="col-lg-6 p-1">

                                <FormField
                                    fieldName="TextInput"
                                    id="number"
                                    name="number"
                                    placeholder="Enter your Phone Number"
                                    requiredInd={true}
                                    label="Phone Number:"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className="d-flex">
                            <div className="col-lg-4 p-1">
                                <FormField
                                    fieldName="TextInput"
                                    id="state"
                                    name="state"
                                    placeholder="Enter your State Name"
                                    requiredInd={true}
                                    label="State:"
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-4 p-1">
                                <FormField
                                    fieldName="TextInput"
                                    id="city"
                                    name="city"
                                    placeholder="Enter your City Name"
                                    requiredInd={true}
                                    label="City:"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="col-lg-4 p-1">
                                <FormField
                                    fieldName="TextInput"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Enter your Pin Code"
                                    requiredInd={true}
                                    label="Pin Code:"
                                    value={pincode}
                                    onChange={(e) => setPinCode(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="col-lg-6 p-1">

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
                            <div className="col-lg-6 p-1">

                                <FormField
                                    fieldName="TextInput"
                                    id="confirmpassword"
                                    name="confirmpassword"
                                    placeholder="Confirm your Password"
                                    requiredInd={true}
                                    label="Confirm Password:"
                                    value={confirmpassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        {error && <div style={{ color: 'red' }}>{error}</div>}
                        <div className="d-flex mt-4 justify-content-center mb-3" >
                            
                            <button type="submit" class="btn btn-success">Submit and Save Data</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </div>

)
};

export default RegisterModel;
