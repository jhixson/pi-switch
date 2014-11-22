/**
 * PinController
 *
 * @description :: Server-side logic for managing pins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var gpio = require('pi-gpio');

module.exports = {
	read: function (req, res) {
    var pin = parseInt(req.param('pin'));
    gpio.read(pin, function(err, value) {
      if(err) throw err;
      console.log(value);
    });

    return res.send(pin);
  },
};

