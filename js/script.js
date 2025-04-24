// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by:shem irekpita
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict";
    function calculate() {
        // Get the input values
        let Y1int = parseFloat(document.getElementById("Y1int").value);
        let Y2int = parseFloat(document.getElementById("Y2int").value);
        let X1int = parseFloat(document.getElementById("X1int").value);
        let X2int = parseFloat(document.getElementById("X2int").value);
        // Calculate
        let slope = (Y2int - Y1int)/(X2int - X1int);
        let calculation = Y2int - (slope * X2int);
        // Display the results
        document.getElementById("slope").innerHTML = "slope " + slope.toFixed();
        document.getElementById("calculation").innerHTML = "Y-int " + calculation.toFixed();
}
