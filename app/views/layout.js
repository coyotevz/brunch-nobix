module.exports = Layout = Chaplin.Layout.extend({

  title: 'Nobix',

  listen: {
    'dispatcher:dispatch mediator': 'on_dispatch',
  },

  regions: {
    'root': 'body',
  },

  on_dispatch: function(controller, params, route) {
    console.log('dispatcher:dispatch event');
  },

});
