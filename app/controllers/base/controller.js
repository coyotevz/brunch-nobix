var SiteView = require('views/site-view');

module.exports = Chaplin.Controller.extend({
  beforeAction: function() {
    Controller.__super__.beforeAction.apply(this, arguments);
    this.reuse('site', SiteView);
  }
});
