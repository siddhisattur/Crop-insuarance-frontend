import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../layouts/FormField'
import FormField from '../layouts/FormField';
import '../../Assets/css/Models/LoginModel.css'
import 'bootstrap/dist/css/bootstrap.css';

const Customer = () => {

    const [productname, setProductName] = useState();
    const [productid, setProductID] = useState();

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

    return(
        <div>
            <div className="main m-1 mt-4 d-flex justify-content-center align-items-center" >
            <div className="col-xl-6 col-lg-6" style={{marginTop:100}}>
                <div className="card shadow mb-4 m-2">
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-center" style={{backgroundColor:"#F0EAD2"}}>
                        <h3 className="m-0 font-weight-bold text-success">Get Product Details</h3>
                    </div>
                    <div className="card-body" style={{backgroundColor:"#d8f3dc"}}>
                        <form className="col-lg-12">
                            
                            
                            <div className="d-flex">
                                <div className="col-lg-6 p-1">

                                    <FormField
                                        fieldName="TextInput"
                                        id="productid"
                                        name="productid"
                                        placeholder="Enter Required Product ID"
                                        requiredInd={true}
                                        label="Product ID:"
                                        value={productid}
                                        onChange={(e) => setProductID(e.target.value)}
                                    />
                                </div>
                                <div className="col-lg-6 p-1">

                                    <FormField
                                        fieldName="TextInput"
                                        id="productname"
                                        name="productname"
                                        placeholder="Enter Required Product Name"
                                        requiredInd={true}
                                        label="Product Name:"
                                        value={productname}
                                        onChange={(e) => setProductName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <h3 className="m-0 font-weight-bold text-success" style={{ borderBottom: "2px solid #5cb85c" }}>Upload your QR:</h3>
                                <div className="d-flex justify-content-center">

                                    <div className="col-lg-8 p-1">
                                        <div>
                                            <label htmlFor="imageUpload" className="pe-2 mt-2">Upload QR :</label>
                                            <input
                                                type="file"
                                                id="imageUpload"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />

                                            {image && (
                                                <div>
                                                    <label>Preview:</label>
                                                    <img src={image} alt="Uploaded Preview" style={{ maxWidth: '100%' }} />
                                                    <button type="button" onClick={handleClearImage} className="btn btn-danger" style={{marginLeft:180, marginTop:10}}>
                                                        Clear Image
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                    </div>


                                </div>
                            
                            <div className="d-flex mt-4 justify-content-center mb-3">
                                <button type="button" class="btn btn-success">Get Product Details</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </div>
        </div>
    )
};

export default Customer;