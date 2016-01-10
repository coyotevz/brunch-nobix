var EditDialogView = require('views/edit_dialog');

var SupplierEditDialog = EditDialogView.extend({
  content_form: 'supplier/edit.html', // Add extension .html to this file

  listen: {
    'change model': 'on_model_change',
    'show': 'on_show',
    'hide': 'on_hide',
  },

  bindings: {
    '[name=name]': 'name',
    '#name': 'name',
  },

  cancel: function() {
    console.log('cancel');
    this.dialog.close();
  },

  save: function() {
    console.log('save');
    this.dialog.close();
  },

  on_show: function() {
    console.log('supplier edit dialog show');
  },

  on_hide: function() {
    console.log('supplier edit dialog hide');
  },

  on_model_change: function() {
    console.log('on model change triggered');
  },
});

module.exports = SupplierEditDialog;
