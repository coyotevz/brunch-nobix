var ListView = require('views/base/list/view');
var ListSelectionContextView = require('views/base/list/selection_context_view');
var SupplierItemView = require('views/supplier/item_view');

var SupplierSelectionContext = ListSelectionContextView.extend({
  /* TODO: define actions */
});

var SupplierListView = ListView.extend({

  template: 'supplier/list.html',
  noWrap: true,
  itemView: SupplierItemView,
  selectionContextView: SupplierSelectionContext,

});

module.exports = SupplierListView;
