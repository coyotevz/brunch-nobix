module.exports = View = Chaplin.View.extend({
  noWrap: true,
  autoRender: true,

  /* method borrowed from controller, this lets reuse views from views */
  reuse: function(name) {
    var method = arguments.length === 1 ? 'retrieve' : 'compose';
    return Chaplin.mediator.execute.apply(Chaplin.mediator, ['composer:'+method].concat([].slice.call(arguments)));
  },

});
