var View = require('views/base/view');
var Dialog = require('views/dialog');

var SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  initialize: function () {
    View.prototype.initialize.apply(this, arguments);
    this.delegate('click', '.action-edit', this.edit);

    // TODO Only for develop dialog style, remove please
    var dialog = new Dialog();
    dialog.run({
      title: 'Some title',
      text: 'Hello, we are in dialog paragraph.',
      buttons: {
        'success': {
          'label': 'OK',
          'action': function(dialog, evt) {
            console.log('OK');
            dialog.close();
          }
        },
        'cancel': {
          'label': 'Cancel',
          'style': 'btn-flat red-text',
          'action': function(dialog, evt) {
            console.log('Cancel');
            dialog.close();
          }
        }
      }
    });

  },

  listen: {
    'sync model': 'render',
  },

  edit: function(evt) {
    evt.stopPropagation();
    var dialog = new Dialog();
    dialog.run({
      title: 'Some title',
      text: 'Hello, we are in dialog paragraph.',
      buttons: {
        'success': {
          'label': 'OK',
          'style': 'btn-flat blue-text',
          'action': function(dialog, evt) {
            console.log('OK');
          }
        },
        'cancel': {
          'label': 'Cancel',
          'action': function(dialog, evt) {
            console.log('Cancel');
          }
        }
      }
    });
  }
});

module.exports = SupplierDetailView;
