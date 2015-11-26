var Chaplin = require('chaplin');

// The application object.
module.exports = Application = Chaplin.Application.extend({
  title: 'Nobix',

  start: function() {
    var args = [].slice.call(arguments);
    console.log('Start application', args);
    Application.__super__.start.apply(this, args);
  }
});
