/* global $ _ */
var View = require('views/base/view');

var SidebarView = View.extend({
  optionNames: View.prototype.optionNames.concat(['view']),
  region: 'module_nav',
  template: 'common/sidebar.html',
  noWrap: true,
  menuItems: null,
  _current: null,

  getTemplateData: function() {
    return {items: this.menuItems};
  },

  render: function() {
    View.prototype.render.apply(this, arguments);
    this.delegate('click', 'li.nav-item a', this.onClick);
    // Set first as current
    //this.setCurrentMenu(this.$('li.nav-item').first());
  },

  setView: function(view) {
    this.view = view;
  },

  onClick: function(evt) {
    var $item, select;
    $item = $(evt.target).parents('.nav-item');
    evt.preventDefault();
    select = this.callItemAction($item);
    if (select) {
      this.setCurrentMenu($item);
    }
  },

  setCurrentMenu: function($item) {
    if ($item !== null) {
      this.$('li.nav-item.active-item').removeClass('active-item');
      $item.addClass('active-item');
    }
  },


  callItemAction: function($item) {
    var actionName, action;
    actionName = _.find(this.menuItems, { name: $item.data('name') }).action;
    if (actionName !== undefined) {
      action = this[actionName];
    }
    return typeof action === 'function' ? action() : void 0;
  },

});

module.exports = SidebarView;
