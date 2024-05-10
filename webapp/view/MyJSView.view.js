sap.ui.jsview("firs.firstproject.view.MyJSView",{

    getControllerName : function(){
        return "firs.firstproject.controller.MyJSView"
    },
    createContent : function(oController){

        var oText = new sap.m.Text(this.createId("Idtext1"), {
            text : "This is text from js view"

        });
        var oChekBox = new sap.m.CheckBox(this.createId("idCheckBox1"), {
            text : "NO"

        });
        oChekBox.attachSelect(oController.onCBselect, oController);
        return[oText, oChekBox];

    }





});