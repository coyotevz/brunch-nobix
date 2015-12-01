var View = require('views/base/view');

module.exports = SupplierDetailView = View.extend({
  autoRender: false,
  template: 'supplier/detail.html',

  listen: {
    'sync model': 'render',
  }
});
