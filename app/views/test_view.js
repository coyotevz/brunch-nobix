var View = require('views/base/view');

module.exports = TestView = View.extend({

  template: 'test.html',

  showAll: function() {
    console.log('Show all!');
  },

});
