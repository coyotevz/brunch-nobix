var View = require('views/base/view');
var SupplierEditDialog = require('views/supplier/edit_dialog');

var SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  initialize: function () {
    View.prototype.initialize.apply(this, arguments);
    this.delegate('click', '.action-edit', this.edit);
    this.edit();
  },

  listen: {
    'sync model': 'render',
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
