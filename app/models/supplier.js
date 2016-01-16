/* global Backbone */
var Model = require('models/base/model');
var Collection = require('models/base/collection');

var Address = Model.extend({
});

var AddressCollection = Collection.extend({
  model: Address,
});

var Supplier = Model.extend({
  urlRoot: '/suppliers',

  relations: {
    type: Backbone.Many,
    key: 'address',
    collectionType: AddressCollection,
  },

});

module.exports = Supplier;
