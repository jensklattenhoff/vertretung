jQuery.sap.declare("com.p7s1.util.Formatter");

jQuery.sap.require("sap.ui.core.format.DateFormat");

com.p7s1.util.Formatter = {

	formatDate: function(dDate) {
		if (dDate) {
			var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
				pattern: "dd.MM.yyyy"
			});
			return oDateFormat.format(new Date(dDate));
		}
	},

	formatActive: function(sValue) {
		if (sValue === "X") {
			return "Aktive Vertretung";
		} else {
			return "Passive Vertretung";
		}
	},
	
	formatStatus: function(sValue) {
		if (sValue === "X") {
			return "Success";
		} else {
			return "None";
		}
	}

}