var View = require('views/base/view');

var SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  listen: {
    'sync model': 'render',
  }
});

module.exports = SupplierDetailView;
