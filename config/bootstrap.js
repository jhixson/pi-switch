/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var _ = require('lodash');

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var gpio_pins = [7, 11, 12, 13, 15, 16, 18, 22];
  _.each(gpio_pins, function(pin) {
    Pin.create({ gpio_id: pin }).exec(function(err, new_pin) {
      console.log('Created pin '+new_pin.gpio_id+': '+new_pin.status);
    });
  });
  cb();
};
