var View = require('views/base/view');

var BaseView = View.extend({
  className: 'wrapper',
  noWrap: false,
  template: 'base.html',
  regions: {
    'main_content': '.main-content',
    'module_nav': '.module-nav-container',
  },

  initialize: function() {
    View.prototype.initialize.apply(this, arguments);
    console.log('BaseView#initialize(%s)', this.cid);
  },
});

module.exports = BaseView;
