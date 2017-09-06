var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.second = new schedule.Range(0, 59, 1);

const MACS = [ "a4:0f:24:0e:93:ca", "b4:0f:24:0e:93:cb", "c4:0f:24:0e:93:cz" ];
const NAMES = [ "francois", "david", "gabe" ];

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

	schedule.scheduleJob(rule, function() {

		//Mimic an issue that too many values are emitted per second (1000 values/sec)
		for (var i = 0; i<100; i++) {

            var details = {};

            var entry = _getRandomInt(0, 3);
            var value = _getRandomInt(1, 1000) + "";


            details.macaddr = MACS[entry];
            details.screenname = NAMES[entry];
            details.values = [];
            details.values.push(value);

            console.log(JSON.stringify(details));

            self.socket.emit('update', details);

        }

	});
}

module.exports = {

	"init" : _init,
	"run" : _run
};
