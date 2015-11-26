var Supplier = require('models/supplier');

module.exports = SupplierCollection = Chaplin.Collection.extend({
  model: Supplier,
  urlRoot: '/suppliers',
});
