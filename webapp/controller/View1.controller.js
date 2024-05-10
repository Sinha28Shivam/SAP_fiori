sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "firs/firstproject/myLib/MessageManager",
    "sap/ui/core/Fragment",
    "firs/firstproject/myLib/Formatter"
],
    function (Controller, MessageToast, MessageManager, Fragment, Formatter) {
        "use strict";

        return Controller.extend("firs.firstproject.controller.View1", {
            myformatter : Formatter,
            onInit: function () {
                var mydata = {
                    "name" : "shivam",
                    "enabled" : true,
                    "address" : "Law college road"
                };
                var ojsonModel =  new sap.ui.model.json.JSONModel();
                ojsonModel.setData(mydata);
                this.getView().setModel(ojsonModel);


                var ojsonModel2 =  new sap.ui.model.json.JSONModel();
                ojsonModel2.loadData("model/myproduct.json");
                this.getView().setModel(ojsonModel2, "myjson");
            },
            // onShowHello: function () {
            //     MessageManager.successMessage();

            // },
            onShowText: function () {
                // alert("Hello");
                MessageToast.show("You are good to go..", {
                    my: "center center",
                    at: "center center"
                })
            },
            onShowText1: function () {
                // alert("Hello");
                MessageToast.show("Sorry it failed..", {
                    my: "center center",
                    at: "center center"
                })
            },
            onSuccess: function(){
                MessageManager.successMessage("this is message from SAPUI developer","uI5 Developer");
            },
            onCBselect : function(){
                var oChekbox = this.byId("checkBox");
                if(oChekbox.getSelected()){
                    oChekbox.setText("Yes");

                }else{
                    oChekbox.setText("No");

                }

            },
            onSubmit(){
                MessageToast.show("You have submitted form successfully")
            },


            onButton4 : function(){
                var oInput = this.byId("container-firs.firstproject---View1--idXMLFrag--input1");
                var oText = this.byId("container-firs.firstproject---View1--idXMLFrag--text5")
                oText.setText("Hello " + oInput.getValue() + " Have you completed Hands' On?");
            },

            openDialog : function(){
            var oView = this.getView();
            if(!this.byId("idDialog")){
                Fragment.load({
                    id : oView.getId(),
                    name : "firs.firstproject.view.Dialogfrag",
                    type : "XML",
                    controller : this
                }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                });

            }else{
                this.byId("idDialog").open();
            }
            },
            onCloseDialog : function(){
                this.byId("idDialog").close();
                var oInput = this.byId("inputin1");
                var oText = this.byId("container-firs.firstproject---View1--idXMLFrag--text5")
                oText.setText("Are you enjoying learning SAP UI5? : " + oInput.getValue());

            }
        });
    });


