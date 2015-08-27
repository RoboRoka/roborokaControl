var events = require('events');
var serialport = require('serialport');

var RoboRoka = function(serialPort) {
	var self = this
	SerialPort = serialport.SerialPort;
	this.serialPort = new SerialPort(serialPort, {
		baudRate: 9600,
		parser: serialport.parsers.readline("\r\n")
	});
	this.serialPort.on("open", function () {
		self.emit("open");
	});
};

RoboRoka.prototype = new events.EventEmitter;

RoboRoka.prototype.close = function() {
	this.serialPort.close();
}

RoboRoka.prototype.swivel = function(angle) {
	this.serialPort.write("sw" + angle + "\n");
}

RoboRoka.prototype.upDown = function(angle) {
	this.serialPort.write("ud" + angle + "\n");
}

RoboRoka.prototype.fwdBack = function(angle) {
	this.serialPort.write("fb" + angle + "\n");
}

RoboRoka.prototype.openClaw = function() {
	this.serialPort.write("clo\n");
}

RoboRoka.prototype.closeClaw = function() {
	this.serialPort.write("clc\n");
}

RoboRoka.prototype.center = function() {
	this.serialPort.write("cntr\n");
}

RoboRoka.prototype.random = function() {
	this.serialPort.write("rnd\n");
}

module.exports = RoboRoka;
