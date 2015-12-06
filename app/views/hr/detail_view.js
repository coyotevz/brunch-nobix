var View = require('views/base/view');

var EmployeeDetailView = View.extend({
  autoRender: false,
  template: 'hr/detail.html',

  listen: {
    'sync model': 'render',
  },
});

module.exports = EmployeeDetailView;
