var View = require('views/base/view');

module.exports = BaseView = View.extend({
  className: 'wrapper',
  noWrap: false,
  //template: 'base.html',
  template: 'test.html',
  regions: {
    'main_content': '.main-content',
    'module_nav': '.module-nav-container',
  },

  initialize: function() {
    BaseView.__super__.initialize.apply(this, arguments);
    console.log('BaseView#initialize(%s)', this.cid);
  },
});
