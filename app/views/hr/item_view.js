var ListItemView = require('views/base/list/item_view');

var EmployeeItemView = ListItemView.extend({
  template: 'hr/item_row.html',
});

module.exports = EmployeeItemView;
