/**
* Pin.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    gpio_id: {
      type: 'integer',
      required: true
    },
    status: {
      type: 'string',
      enum: ['on', 'off'],
      required: true,
      defaultsTo: 'off'
    },
    isOn: function() {
      return this.status === 'on'
    }
  }

};
