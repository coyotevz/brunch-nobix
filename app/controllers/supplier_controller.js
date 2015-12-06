var Controller = require('controllers/base/controller');
var Supplier = require('models/supplier');
var SupplierCollection = require('models/supplier_collection');
var SupplierSideView = require('views/supplier/side_view');
var SupplierListView = require('views/supplier/list_view');
var SupplierDetailView = require('views/supplier/detail_view');

var SupplierController = Controller.extend({

  title: 'Suppliers',

  beforeAction: function() {
    Controller.prototype.beforeAction.apply(this, arguments);
    this.reuse('sidebar', SupplierSideView);
    this.publishEvent('module:setCurrent', 'suppliers');
  },

  list: function(params) {
    console.log('Supplier#list(%s)', JSON.stringify(params));
    this.supplierList = new SupplierCollection();
    this.view = new SupplierListView({
      collection: this.supplierList,
      region: 'main_content',
    });
    this.reuse('sidebar').setView(this.view);
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

module.exports = SupplierController;
