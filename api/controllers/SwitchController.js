/**
 * SwitchController
 *
 * @description :: Server-side logic for managing switches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var gpio = require('pi-gpio');

module.exports = {
  on: function (req, res) {
    var pin = parseInt(req.param('pin'));
    gpio.open(pin, 'output', function(err) {
      gpio.write(pin, 1, function() {
        gpio.close(pin);
      });
    });

    return res.send(pin);
  },

  off: function (req, res) {
    var pin = parseInt(req.param('pin'));
    gpio.open(pin, 'output', function(err) {
      gpio.write(pin, 0, function() {
        gpio.close(pin);
      });
    });

    return res.send(pin);
  }
};

