
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent"
],
    function (Controller, UIComponent) {
        "use strict";

        return Controller.extend("za.spar.customer.demoapp1.controller.master", {
            onInit: function () {
                // debugger;
            },
            onListItemPress: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                // var rowNo = oEvent.getSource().getBindingContext().getPath().substr(12,5);
                var customerID = oEvent.getSource().getBindingContextPath().substr(12,5);
                // oEvent.getParameters().id.substr((oEvent.getParameters().id.lastIndexOf("-") + 1), (oEvent.getParameters().id.length - 1) - (oEvent.getParameters().id.lastIndexOf("-")));
                debugger;
                oRouter.navTo("detail",{customerPath: customerID});
            }
        });
    });
    
