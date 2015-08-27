
var RoboRoka = require('./roboroka.js');
var roboRoka = new RoboRoka('/dev/cu.usbmodem1411')

var menu = require('./menu.js');

menu.add('OPEN CLAW');
menu.add('CLOSE CLAW');
menu.add('SWIVEL LEFT');
menu.add('SWIVEL RIGHT');
menu.add('GO UP');
menu.add('GO DOWN');
menu.add('GO FORWARD');
menu.add('GO BACK');
menu.add('CENTER');
menu.add('RANDOM');
menu.add('EXIT');

roboRoka.on("open", function() {
	menu.on("select", function(command) {

		if (command == "EXIT") {

			menu.close();
			roboRoka.close();

		} else if (command == "OPEN CLAW") {

			roboRoka.openClaw();

		} else if (command == "CLOSE CLAW") {

			roboRoka.closeClaw();

		} else if (command == "SWIVEL LEFT") {

			roboRoka.swivel(160);

		} else if (command == "SWIVEL RIGHT") {

			roboRoka.swivel(20);

		} else if (command == "GO UP") {

			roboRoka.upDown(160);

		} else if (command == "GO DOWN") {

			roboRoka.upDown(20);

		} else if (command == "GO FORWARD") {

			roboRoka.fwdBack(150);

		} else if (command == "GO BACK") {

			roboRoka.fwdBack(80);

		} else if (command == "CENTER") {

			roboRoka.center();

		} else if (command == "RANDOM") {

			roboRoka.random();

		}

	});
});
