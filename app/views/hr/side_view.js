var SidebarView = require('views/base/sidebar_view');

var EmployeeSideView = SidebarView.extend({

  menuItems: [
    {
      name: 'showall',
      label: 'Ver Todos',
      action: 'showAll',
    },
  ],

  showAll: function() {
    console.log('show all!');
    return true;
  },

});

module.exports = EmployeeSideView;
