var BaseView = require('views/base_view');
var HeaderView = require('views/header_view');

module.exports = Chaplin.Controller.extend({

  beforeAction: function() {
    Controller.__super__.beforeAction.apply(this, arguments);
    this.reuse('root', BaseView, {region: 'root'});
    this.reuse('header', HeaderView, {container: 'header'});
  },

});
