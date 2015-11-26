var Controller = require('controllers/base/controller');
var HeaderView = require('views/home/header_view');
var HomePageView = require('views/home/home_page_view');

module.exports = Controller.extend({
  beforeAction: function() {
    this.constructor.__super__.beforeAction.apply(this, arguments);
    this.reuse('header', HeaderView, { region: 'header' });
  },

  index: function() {
    this.view = new HomePageView({region: 'main'});
  }
});
