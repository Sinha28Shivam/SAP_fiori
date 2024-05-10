sap.ui.define([
    

],
    function () {
        "use strict";

        return  {
            capatilizefirstletter: function(sValue) {
                return sValue.charAt(0).toUpperCase() + sValue.slice(1);

            },
            reqText(oQPU, oUP, oUIS){
                return "Quantitiy per unit: " + oQPU + " Unit Price: " + oUP + " Unit in Price: " + oUIS;

            }
            
        };
    });
