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
    });
  }
});

module.exports = SupplierDetailView;
