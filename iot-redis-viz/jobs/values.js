const macs = [ "f4:0f:24:0e:93:ca", "f4:0f:24:0e:93:cb", "f4:0f:24:0e:93:cz" ];
const names = [ "francois", "david", "gabe" ];

var self;


function _init(socket) {

	this.socket = socket;
	self = this;
	return self;
} 


function _getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function _run() {

	while (true) {
	
		var details = {};

		var entry = _getRandomInt(0,2);
		var value = _getRandomInt(1, 1000) + "";

		details.macaddr = macs[entry];
		details.screenname = names[entry];
		details.values = [];
		details.values.push(value);

		console.log(JSON.stringify(details));

		this.socket.emit('update', details);

	}
}

module.exports = {

	"init" : _init,
	"run" : _run
};
