var PaginatedCollection = require('models/base/paginated_collection');
var Supplier = require('models/supplier');

var SupplierCollection = PaginatedCollection.extend({
  model: Supplier,
  urlRoot: '/suppliers',

  initialize: function() {
    SupplierCollection.__super__.initialize.apply(this, arguments);
    this.fetch();
  },

});

module.exports = SupplierCollection;
