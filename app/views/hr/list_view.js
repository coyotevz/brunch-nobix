var ListView = require('views/base/list/view');
var ListSelectionContextView = require('views/base/list/selection_context_view');
var EmployeeItemView = require('views/hr/item_view');

var EmployeeSelectionContext = ListSelectionContextView.extend({
  /* TODO: define actions */
});

var EmployeeListView = ListView.extend({
  template: 'hr/list.html',
  noWrap: 'true',
  itemView: EmployeeItemView,
  selectionContextView: EmployeeSelectionContext,

  initialize: function(params) {
    EmployeeListView.__super__.initialize.apply(this, arguments);
    console.log('EmployeeListView %s', JSON.stringify(params));
  },
});

module.exports = EmployeeListView;
