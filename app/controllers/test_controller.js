var Controller = require('controllers/base/controller');
var TestView = require('views/test_view');

module.exports = TestController = Controller.extend({
  title: 'Test controller',

  beforeAction: function() {
    TestController.__super__.beforeAction.apply(this, arguments);
    console.log('test#beforeAction()');
  },

  index: function(params) {
    console.log('test#index()');
    this.view = new TestView({region: 'root'});
  },

});
