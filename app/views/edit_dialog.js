var DialogView = require('views/dialog');

var EditDialogView = DialogView.DialogContentView.extend({
  template: 'common/edit_dialog.html',
  closeButton: false,
  optionNames: DialogView.DialogContentView.prototype.optionNames.concat([
    /* content_form must be filled with template name + .html extension */
    'content_form',
  ]),

  events: {
    'click [name=cancel]': 'cancel',
    'click [name=save]': 'save',
  },

  cancel: function() {},
  save: function() {},
});

module.exports = EditDialogView;
