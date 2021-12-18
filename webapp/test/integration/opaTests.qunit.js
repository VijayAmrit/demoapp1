/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["za/spar/customer/demoapp1/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
