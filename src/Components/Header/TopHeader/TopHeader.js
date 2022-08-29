import React from "react";
import Button from "../../shared/Button/Button";
import './TopHeader.scss'
const TopHeader = () => {
    return (
        <div className="topHead">
            <div className="container">
                <div className="topHeader">
                    <div className="select">
                        <select>
                            {options.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="chat" >
                      <Button color="blueColor" fontFamily="MotivaRegular" fontSize="xxs" variant="text" btnText="Live chat" ></Button>
                    </div>
                </div>
            </div>
        </div>

    );
}

const options = [
    {
        label: "EN",
        value: "EN",
    },
    {
        label: "FR",
        value: "FR",
    },

];
export default TopHeader;