var View = require('views/base/view');

var SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  initialize: function () {
    View.prototype.initialize.apply(this, arguments);
    this.delegate('click', '.action-edit', this.edit);
  },

  listen: {
    'sync model': 'render',
  },

  edit: function(evt) {
    evt.stopPropagation();
    console.log('#edit:', arguments);
  }
});

module.exports = SupplierDetailView;
