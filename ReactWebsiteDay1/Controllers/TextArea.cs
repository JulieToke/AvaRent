﻿import React from "react";

const TextareaPage = () => {
return (

    < div className = "form-group" >

        < label htmlFor = "exampleFormControlTextarea1" > Basic textarea </ label >

        < textarea
                className = "form-control"
                id = "exampleFormControlTextarea1"
                rows = "5"
            />
        </ div >
    );
};

export default TextareaPage;