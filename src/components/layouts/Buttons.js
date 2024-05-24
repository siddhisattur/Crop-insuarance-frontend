import React from "react";

const Buttons = ({ buttonName, btnText, onClick }) => {

    const renderField = () => {
        switch (buttonName) {
            case "Secondary":
                return (
                    <button
                        className="btn btn-secondary py-1 float-right me-1"
                        onClick={onClick}
                    >
                        {btnText}
                    </button>
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

export default Buttons;
