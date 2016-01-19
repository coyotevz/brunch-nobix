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
    'change model': 'onModelChange',
    'dialog:shown': 'onShow',
    'dialog:hiden': 'onHide',
  },

  render: function() {
    Dialog.prototype.render.apply(this, arguments);
    this.delegate('click', '[name=cancel]', this.cancel);
    this.delegate('click', '[name=save]', this.save);
  },

  onShow: function() {
    if (this.model) {
      window._model = this.model;
      console.log('start tracking model');
      this.model.startTracking();
      this.model.once('sync', function(model) {
        model.resetAttributes();
      });
    }
  },

  onHide: function() {
    if (this.model) {
      console.log('stop tracking model');
      this.model.stopTracking();
    }
  },

  onModelChange: function(model, options) {
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
