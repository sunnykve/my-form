import PhoneInput from "react-phone-number-input";
import React, { useState } from "react";
import "./phone.css"


const Phone = () => {
    const [value, setValue] = useState();
    return (
        <div>
            <PhoneInput
                className="phone"
                lable="Phone"
                placeholder="Enter phone number"
                value={value}
                onChange={setValue}
            />
            {value}
        </div>
    )
};
export default Phone;