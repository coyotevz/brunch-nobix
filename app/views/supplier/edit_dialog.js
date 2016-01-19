/* global $ */
var EditDialog = require('views/base/dialog/edit');

var SupplierEditDialog = EditDialog.extend({
  content_form: 'supplier/edit.html', // Add extension .html to this file
  dialog_class: 'nbs-supplier-edit-dialog',
  title: 'Editar Proveedor',

  bindings: {
    '[name=name]': 'name',
    '#name': 'name',
  },

  render: function() {
    EditDialog.prototype.render.apply(this, arguments);
    this.$el.find('.form-row').formRow();

    if (this.model !== null) {
      this.model.once('change', $.proxy(function() {
        this.$el.find('.row-field input').trigger('change');
      }, this));
    }
  },

  cancel: function() {
    console.log('cancel ' + this.cid);
    this.close();
  },

  save: function() {
    console.log('save');
    this.close();
  },
});

module.exports = SupplierEditDialog;
