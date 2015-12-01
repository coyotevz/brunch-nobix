var Supplier = require('models/supplier');

var SupplierCollection = Chaplin.Collection.extend({
  model: Supplier,
  urlRoot: '/suppliers',
});

module.exports = SupplierCollection;
