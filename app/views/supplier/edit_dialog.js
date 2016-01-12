var EditDialog = require('views/base/dialog/edit');

var SupplierEditDialog = EditDialog.extend({
  content_form: 'supplier/edit.html', // Add extension .html to this file
  dialog_class: 'nbs-supplier-edit-dialog',
  title: 'Editar Proveedor',

  bindings: {
    '[name=name]': 'name',
    '#name': 'name',
  },

  cancel: function() {
    console.log('cancel');
    this.close();
  },

  save: function() {
    console.log('save');
    this.close();
  },
});

module.exports = SupplierEditDialog;
