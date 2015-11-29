//var env = require('templates/env');

module.exports = View = Chaplin.View.extend({
  noWrap: true,
  autoRender: true,

  getTemplateFunction: function(tmpl_attr) {
    tmpl_attr = tmpl_attr || 'template';
    var template = this[tmpl_attr],
        templateFunc = null;

      if (typeof template === 'string') {
        var tmpl = env.getTemplate(template);
        templateFunc = function(ctx) {
          return _.trim(tmpl.render(ctx));
        };
        this.constructor.prototype[tmpl_attr] = templateFunc;
      } else {
        templateFunc = template;
      }

      return templateFunc;
  },

  /* method borrowed from controller, this lets reuse views from views */
  reuse: function(name) {
    var method = arguments.length === 1 ? 'retrieve' : 'compose';
    return Chaplin.mediator.execute.apply(Chaplin.mediator, ['composer:'+method].concat([].slice.call(arguments)));
  },

});
