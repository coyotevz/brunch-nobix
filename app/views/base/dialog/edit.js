var DialogView = require('views/base/dialog/dialog');

var EditDialogView = DialogView.extend({
  template: 'base/dialog/edit.html',
  closeButton: false,
  optionNames: DialogView.prototype.optionNames.concat([
    /* content_from must be filled with template name + .html extension */
    'content_from',
  ]),

  listen: {
    'change model': 'on_model_change',
    'show': 'on_show',
    'hide': 'on_hide',
  },

  initialize: function() {
    DialogView.prototype.initialize.apply(this, arguments);
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

module.exports = EditDialogView;
