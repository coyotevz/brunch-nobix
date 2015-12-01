var View = require('views/base/view');

var HeaderView = View.extend({
  template: 'header.html',
  noWrap: false,
  el: 'header',
  current_module: null,

  listen: {
    'pace:hide mediator': 'setupView',
    'module:setCurrent mediator': 'setCurrentModule'
  },

  getTemplateData: function() {
    return {
      module: this.current_module,
      modules: Chaplin.mediator.modules,
    };
  },

  setCurrentModule: function(mod_name) {
    this.current_module = _.filter(Chaplin.mediator.modules, 'name', mod_name)[0];
    this.updateView();
  },

  updateView: function() {
    this.$('.appbar.row')
      .removeClass()
      .addClass('appbar row')
      .addClass(this.current_module.name)
      .find('.module-title')
      .text(this.current_module.title);
  },

  setupView: function() {
    //this.$('.button-collapse').on("click", function() {
    //  $(this).tolltip('hide');
    //}).sideNav({
    //  closeOnClick: true
    //});
  },

});

module.exports = HeaderView;
