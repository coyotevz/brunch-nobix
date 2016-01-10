var View = require('views/base/view');
var Dialog = require('views/dialog');
var SupplierEditView = require('views/supplier/edit_view');

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
    var dialog = new Dialog();
    dialog.run({
      view: SupplierEditView,
      model: this.model,
    });
  },
});

module.exports = SupplierDetailView;
