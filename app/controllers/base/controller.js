var BaseView = require('views/base_view');
var HeaderView = require('views/header_view');

var Controller = Chaplin.Controller.extend({

  beforeAction: function() {
    Controller.__super__.beforeAction.apply(this, arguments);
    this.reuse('root', BaseView, {region: 'root'});
    this.reuse('header', HeaderView, {container: 'header'});
  },

});

module.exports = Controller;
