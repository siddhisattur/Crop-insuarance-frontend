import React from "react";
import { Form } from "react-bootstrap";
import Select from 'react-select';

const FormFields = ({ fieldName, inputDisabled, label, id, type, placeholder, options, onChange, value, requiredInd, showErrorMsg }) => {


    const hasError = showErrorMsg;

    const renderField = () => {
        switch (fieldName) {
            case "TextInput":
                return (
                    <div className="form-group">
                        <label htmlFor={id}>{label}</label> {requiredInd ? (<span className="text-danger">*</span>) : (null)}
                        <input
                            type={type}
                            className="form-control"
                            id={id}
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            disabled={inputDisabled}

                        />
                        {hasError && <div id={id} className="form-text text-danger">{showErrorMsg}</div>}
                    </div>
                );
            case "DropDown":
                return (
                    <div className="form-group">
                        <label htmlFor={id}>{label}</label> {requiredInd ? (<span className="text-danger">*</span>) : (null)}
                        <select className="form-control" id={id}>
                            {options.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <div id={id} className="form-text">{showErrorMsg}</div>
                    </div>
                );
            case "Radio":
                return (
                    <div className="form-group">
                        <label>{label}</label> {requiredInd ? (<span className="text-danger">*</span>) : (null)}
                        {options.map((option) => (
                            <div key={option.value} className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`${id}-${option.value}`}
                                    name={id}
                                    value={option.value}
                                />
                                <label className="form-check-label" htmlFor={`${id}-${option.value}`}>
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                );
            case "MultipleSelect":
                return (
                    <div className="form-group">
                        <label htmlFor={id}>{label} {requiredInd ? <span className="text-danger">*</span> : null}</label>
                        <Select
                            id={id}
                            options={options}
                            isMulti
                            onChange={onchange}
                        />
                        <div id={id} className="form-text">{showErrorMsg}</div>
                    </div>
                );
            case "SingleSelect":
                return (
                    <div className="form-group">
                        <label htmlFor={id}>{label}</label> {requiredInd ? (<span className="text-danger">*</span>) : (null)}
                        <Select
                            id={id}
                            options={options}
                            value={options.find(option => option.value === value)}
                            onChange={onchange}
                            name={id}
                            placeholder={placeholder}
                            autoFocus={true}
                        />
                        {hasError && <div id={id} className="form-text text-danger">{showErrorMsg}</div>}
                    </div>
                );
            case "Checkbox":
                return (
                    <div className="form-group">
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id={id}
                                checked={value}
                                onChange={onChange}
                                disabled={inputDisabled}
                            />
                            <label className="form-check-label" htmlFor={id}>
                                {label}
                                {requiredInd && <span className="text-danger">*</span>}
                            </label>
                        </div>
                        <div id={id} className="form-text">{showErrorMsg}</div>
                    </div>
                );
            case "ShowLabelText":
                return (
                    <div className="form-group">
                        <label htmlFor={id}>{label}</label>
                        <lable htmlFor={value}>{value}</lable>

                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {renderField()}
        </div>
    );
};

export default FormFields;
