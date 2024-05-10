sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("firs.firstproject.controller.MyJSView", {
            onCBselect : function(){
                var oChekbox = this.byId("idCheckBox1");
                if(oChekbox.getSelected()){
                    oChekbox.setText("Yes");

                }else{
                    oChekbox.setText("No");

                }

            }
        });
    });
