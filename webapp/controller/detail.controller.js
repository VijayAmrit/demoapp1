
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "za/spar/customer/demoapp1/model/models"
],
    function (Controller,
        UIComponent,
        models) {
        "use strict";

        return Controller.extend("za.spar.customer.demoapp1.controller.detail", {
            onInit: function () {
                // debugger;
                sap.ui.core.UIComponent.getRouterFor(this).getRoute("detail")
                    .attachPatternMatched(this._onObjectMatched, this);
            },
            _onObjectMatched: function (oEvent) {
                var custValue = oEvent.getParameter("arguments").customerPath;
                var detailObject = this.getView().getModel("masterModel").getData("/Customers('" + custValue + "')");
                var objectJSON = {
                    "customer": detailObject
                };
                this.getView().setModel(new sap.ui.model.json.JSONModel(objectJSON), "nModel");
            }
        });
    });
