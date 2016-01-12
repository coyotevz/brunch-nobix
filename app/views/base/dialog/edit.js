var Dialog = require('views/base/dialog/dialog');

var EditDialog = Dialog.extend({
  template: 'base/dialog/edit.html',
  closeButton: false,
  optionNames: Dialog.prototype.optionNames.concat([
    /* content_from must be filled with template name + .html extension */
    'content_from',
  ]),

  listen: {
    'change model': 'on_model_change',
    'dialog:shown': 'on_show',
    'dialog:hiden': 'on_hide',
  },

  render: function() {
    Dialog.prototype.render.apply(this, arguments);
    this.delegate('click', '[name=cancel]', this.cancel);
    this.delegate('click', '[name=save]', this.save);
  },

  on_show: function() {
    console.log('show edit dialog');
    window._model = this.model;
  },

  on_hide: function() {
    console.log('hide edit dialog');
  },

  on_model_change: function() {
    console.log('model change triggered');
  },

  cancel: function() {},
  save: function() {},
});

module.exports = EditDialog;
