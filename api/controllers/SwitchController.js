/**
 * SwitchController
 *
 * @description :: Server-side logic for managing switches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  on: function (req, res) {
    var pin = req.param('pin');
    return res.send(pin);
  }
};

