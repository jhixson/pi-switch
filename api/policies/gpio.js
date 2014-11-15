/**
 * gpio
 *
 * @module      :: Policy
 * @description :: Simple policy to only allow gpio pins to be used
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */

var _ = require('lodash');

module.exports = function(req, res, next) {

  var gpio_pins = [7, 11, 12, 13, 15, 16, 18, 22];
  var pin = parseInt(req.param('pin'));
  if (_.contains(gpio_pins, pin)) {
    return next();
  }

  return res.forbidden('You are not permitted to perform this action.');
};
