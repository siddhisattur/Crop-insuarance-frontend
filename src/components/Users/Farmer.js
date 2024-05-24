import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/FormField'
import FormField from '../layouts/FormField';
import '../../Assets/css/Models/LoginModel.css'
import 'bootstrap/dist/css/bootstrap.css';


const Farmer = () => {

    const [walletAddress, setWalletAddress] = useState("");
    const connectWallet = async () => {
        if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
            try {
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                setWalletAddress(accounts[0]);
                console.log(accounts[0]);
            } catch (err) {
                console.log(err.message);
            }
        } else {
            console.log("PLs install metamask");
        }
    }

    const [longitude, setLongitude] = useState();
    const [latitude, setLatitude] = useState();
    const [rainfallincm, setRainfallIncm] = useState();
    const [selectedItem, setSelectedItem] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [phofsoil, setPhOfSoil] = useState();
    const [moistureinsoil, setMoistureinSoil] = useState();
    const [fertilizers, setFertilizers] = useState();
    const [pesticides, setPesticides] = useState();
    const [bankaccnumber, setBankAccNumber] = useState();
    const [ifsccode, setIFSCCode] = useState();
    const [policycompanyname, setPolicyCompanyName] = useState();
    const [policynumber, setPolicyNumber] = useState();

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (readerEvent) => {
                setImage(readerEvent.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleClearImage = () => {
        setImage(null);
    };

    const handleVisitWebsite = () => {
        window.open('https://cbd93d00670cb6fa23.gradio.live', '_blank');
    };


    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];

    const handleDropdownChange = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const FormFields = ({
        fieldName,
        type,
        id,
        name,
        placeholder,
        requiredInd,
        label,
        value,
        onChange,
    }) => {
        return (
            <div>
                <label htmlFor={id}>{label}</label>
                {type === 'select' ? (
                    <select id={id} name={name} value={value} onChange={onChange} required={requiredInd} style={{ width: 480, height: 37, borderRadius: 5, border: "none" }}>
                        <option value="">Select an option</option>
                        <option value="item0">NA</option>
                        <option value="item1">Drought</option>
                        <option value="item2">Hurricane</option>
                        <option value="item3">Storm</option>
                        <option value="item4">Flood</option>
                        <option value="item5">Earth Quake</option>
                        <option value="item6">Other...</option>
                    </select>
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={requiredInd}
                        value={value}
                        onChange={onChange}
                    />
                )}
            </div>
        );
    };


    return (
        <div>
            <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
                <div className="col-xl-8 col-lg-10">
                    <div className="card shadow mb-4 m-2">
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{ backgroundColor: "#F0EAD2" }}>
                            <h3 className="m-0 font-weight-bold text-success">Farm Information</h3>
                        </div>
                        <div className="card-body" style={{ backgroundColor: "#d8f3dc" }}>
                            <form className="col-lg-12">

                                <h3 className="m-0 font-weight-bold text-success" style={{ borderBottom: "2px solid #5cb85c" }}>Location</h3>
                                <div className="d-flex">

                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="longitude"
                                            name="longitude"
                                            placeholder="Enter Longitude"
                                            requiredInd={true}
                                            label="Longitude:"
                                            value={longitude}
                                            onChange={(e) => setLongitude(e.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="latitude"
                                            name="latitude"
                                            placeholder="Enter Latitude"
                                            requiredInd={true}
                                            label="Latitude:"
                                            value={latitude}
                                            onChange={(e) => setLatitude(e.target.value)}
                                        />

                                    </div>


                                </div>
                                <h3 className="m-0 font-weight-bold text-success mt-4" style={{ borderBottom: "2px solid #5cb85c" }}>Weather Condition</h3>
                                <div className="d-flex">
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            type={Number}
                                            id="rainfallincm"
                                            name="rainfallincm"
                                            placeholder=""
                                            requiredInd={true}
                                            label="Rain Fall in cm:"
                                            value={rainfallincm}
                                            onChange={(e) => setRainfallIncm(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <FormFields
                                            label="Recently Occured Natural Disaster "
                                            fieldName="Dropdown"
                                            type="select"
                                            id="dropdown"
                                            name="dropdown"
                                            placeholder=""
                                            value={selectedOption}
                                            onChange={handleOptionChange}
                                        />
                                    </div>
                                    
                                </div>
                                <h3 className="m-0 font-weight-bold text-success" style={{ borderBottom: "2px solid #5cb85c" }}>Soil Condition:</h3>
                                <div className="d-flex">

                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="phofsoil"
                                            name="phofsoil"
                                            placeholder="Enter Ph of Soil"
                                            requiredInd={true}
                                            label="Ph of Soil:"
                                            value={phofsoil}
                                            onChange={(e) => setPhOfSoil(e.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="moistureinsoil"
                                            name="moistureinsoil"
                                            placeholder="Enter Moisture in Soil"
                                            requiredInd={true}
                                            label="Moisture in Soil:"
                                            value={moistureinsoil}
                                            onChange={(e) => setMoistureinSoil(e.target.value)}
                                        />

                                    </div>


                                </div>
                                <h3 className="m-0 font-weight-bold text-success" style={{ borderBottom: "2px solid #5cb85c" }}>Cemicals Used:</h3>
                                <div className="d-flex">

                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="fertilizers"
                                            name="fertilizers"
                                            placeholder="Mention Fertilizers Used"
                                            requiredInd={true}
                                            label="Fertilizers Used:"
                                            value={fertilizers}
                                            onChange={(e) => setFertilizers(e.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6 p-1">
                                        <FormField
                                            fieldName="TextInput"
                                            id="pesticides"
                                            name="pesticides"
                                            placeholder="Mention Pesticides Used"
                                            requiredInd={true}
                                            label="Pesticides Used:"
                                            value={pesticides}
                                            onChange={(e) => setPesticides(e.target.value)}
                                        />

                                    </div>


                                </div>
                                <h3 className="m-0 font-weight-bold text-success" style={{ borderBottom: "2px solid #5cb85c" }}>Check for Plant disease:</h3>
                                <div className="d-flex justify-content-center">

                                    <div className="col-lg-6 p-1 text-center">
                                        <div>
                                            <label htmlFor="imageUpload" className="pe-2 mt-2">Upload Plant Image:</label>
                                            <button
                                                type="button"
                                                class="btn btn-success"
                                                onClick={handleVisitWebsite}
                                                style={{ marginLeft: 180, marginTop: 10 }}
                                            >
                                                Visit Website
                                            </button>
                                            {/* <input
                                                type="file"
                                                id="imageUpload"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            /> */}

                                            {/* {image && (
                                                <div>
                                                    <label>Preview:</label>
                                                    <img src={image} alt="Uploaded Preview" style={{ maxWidth: '100%' }} />
                                                    <button type="button" onClick={handleClearImage} className="btn btn-danger" style={{ marginLeft: 180, marginTop: 10 }}>
                                                        Clear Image
                                                    </button>
                                                </div>
                                            )} */}
                                        </div>

                                    </div>


                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">
                                    <button type="button" class="btn btn-success">Save Data</button>
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
                            <h3 className="m-0 font-weight-bold text-success">Policy Details</h3>
                        </div>
                        <div className="card-body" style={{ backgroundColor: "#d8f3dc" }}>
                            <form className="col-lg-12">


                                <div className="d-flex">
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="bankaccnumber"
                                            name="bankaccnumber"
                                            placeholder="Enter your Bank Account Number"
                                            requiredInd={true}
                                            label="Bank Account Number:"
                                            value={bankaccnumber}
                                            onChange={(e) => setBankAccNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="ifsccode"
                                            name="ifsccode"
                                            placeholder="Enter your IFSC Code"
                                            requiredInd={true}
                                            label="IFSC Code:"
                                            value={ifsccode}
                                            onChange={(e) => setIFSCCode(e.target.value)}
                                        />
                                    </div>

                                </div>

                                <div className="d-flex">
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="policycompanyname"
                                            name="policycompanyname"
                                            placeholder="Enter New Policy Company Name"
                                            requiredInd={true}
                                            label="Policy Company Name:"
                                            value={policycompanyname}
                                            onChange={(e) => setLongitude(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 p-1">

                                        <FormField
                                            fieldName="TextInput"
                                            id="policynumber"
                                            name="policynumber"
                                            placeholder="Enter New Policy Number"
                                            requiredInd={true}
                                            label="Policy Number:"
                                            value={policynumber}
                                            onChange={(e) => setPolicyNumber(e.target.value)}
                                        />
                                    </div>

                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">
                                    <button type="button" class="btn btn-success" >Check Policy</button>
                                </div>
                                <div className="d-flex mt-4 justify-content-center mb-3">

                                    <button type="button" class="btn btn-success" onClick={connectWallet}>
                                        <span >
                                            {walletAddress.length > 0
                                                ? `Connected: ${walletAddress.substring(
                                                    0,
                                                    6
                                                )}...${walletAddress.substring(38)} `
                                                : "Connect Wallet"}
                                        </span>
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    )
};

export default Farmer;
