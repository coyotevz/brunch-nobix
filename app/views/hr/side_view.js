var SidebarView = require('views/base/sidebar_view');

var EmployeeSideView = SidebarView.extend({

  menuItems: [
    {
      name: 'showall',
      label: 'Todos',
      action: 'showAll',
    },
  ],

  showAll: function() {
    console.log('show all!');
  },

});

module.exports = EmployeeSideView;
