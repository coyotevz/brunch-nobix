var SidebarView = require('views/base/sidebar_view');

var SupplierSideView = SidebarView.extend({

  menuItems: [
    {
      name: 'showall',
      label: 'Ver Todos',
      action: 'showAll',
    }
  ],

  showAll: function() {
    console.log('show all!');
    return true;
  },

});

module.exports = SupplierSideView;
