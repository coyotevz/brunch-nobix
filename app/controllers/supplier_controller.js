var Controller = require('controllers/base/controller');
var Supplier = require('models/supplier');
var SupplierCollection = require('models/supplier_collection');
var SupplierSideView = require('views/supplier/side_view');
var SupplierListView = require('views/supplier/list_view');
var SupplierDetailView = require('views/supplier/detail_view');

module.exports = SupplierController = Controller.extend({

  title: 'Suppliers',

  beforeAction: function() {
    SupplierController.__super__.beforeAction.apply(this, arguments);
    this.reuse('sidebar', SupplierSideView);
    this.publishEvent('module:setCurrent', 'suppliers');
  },

  show: function(params) {
    var model = new Supplier({id: params.id});
    model.fetch();
    this.view = new SupplierDetailView({
      region: 'main_content',
      model: model
    });
  },

});
