/* global _ */

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
    if (this.model) {
      console.log('start tracking model');
      this.model.startTracking();
    }
  },

  on_hide: function() {
    if (this.model) {
      console.log('stop tracking model');
      this.model.stopTracking();
    }
  },

  on_model_change: function(model, options) {
    window._model = model;
    console.log('model change detected');

    if (options.stickitChange) {
      var isValid = model.isValid(options.stickitChange.observe);
      var enabled = isValid && model.isChanged() && _.isEmpty(model.validationError || {});
      console.log('enable:', !enabled);
      this.$('[name=save]').attr('disabled', !enabled);
    }
  },

  cancel: function() {},
  save: function() {},
});

module.exports = EditDialog;
