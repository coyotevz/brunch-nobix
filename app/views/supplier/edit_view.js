var EditDialogView = require('views/base/dialog/edit');

var SupplierEditDialog = EditDialogView.extend({
  content_form: 'supplier/edit.html', // Add extension .html to this file
  dialog_class: 'nbs-supplier-edit-dialog', // DONT WORK YET
  title: 'Editar Proveedor',

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
});

module.exports = SupplierEditDialog;
