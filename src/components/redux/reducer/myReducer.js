import React from "react";

let initialData = {
    name: "",
    city: ""
};

let myReducer = (state = initialData, action) => {
    if(action.type == "NAME"){
        state = {
            name: action.nameObj,
            city: action.cityObj
        }
    }
    return state;
};

export default myReducer; 
