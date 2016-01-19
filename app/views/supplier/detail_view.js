var View = require('views/base/view');
var SupplierEditDialog = require('views/supplier/edit_dialog');

var SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  //listen: {
  //  'sync model': 'render',
  //},

  bindings: {
    '[bs-bind=name]': 'name',
  },

  initialize: function () {
    View.prototype.initialize.apply(this, arguments);
    this.delegate('click', '.action-edit', this.edit);
    this.listenToOnce(this.model, 'sync', this.render);
    this.edit();
  },

  edit: function(evt) {
    if (evt !== undefined)
      evt.stopPropagation();
    var dialog = new SupplierEditDialog({
      model: this.model,
    });
    dialog.run();
  },
});

module.exports = SupplierDetailView;
