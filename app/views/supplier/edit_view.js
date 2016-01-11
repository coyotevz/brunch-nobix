var EditDialogView = require('views/edit_dialog');

var SupplierEditDialog = EditDialogView.extend({
  content_form: 'supplier/edit.html', // Add extension .html to this file
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
