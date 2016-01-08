/* global Chaplin */

var Layout = require('views/layout');

// The application object.
var Application = Chaplin.Application.extend({
  title: 'Nobix',

  initLayout: function(options) {
    options = options || {};
    options.title = options.title || this.title;
    this.layout = new Layout(options);
  },

  initMediator: function() {
    // Set available modules
    Chaplin.mediator.modules = [
      // {name: 'dashboard', title: 'Tablero', icon: 'dashboard'},
      // {name: 'sales', title: 'Ventas', icon: 'store'},
      // {name: 'purchases', title: 'Compras', icon: 'shopping_cart'},
      { name: 'suppliers', title: 'Proveedores', icon: 'business' },
      // {name: 'products', title: 'Productos', icon: 'local_offer'},
      // {name: 'hr', title:'Personal', icon: 'people'},
      // {name: 'finances', title: 'Finanzas', icon: 'trending_up'},
    ];

    Chaplin.Application.prototype.initMediator.call(this);
  },

  start: function() {
    var args = [].slice.call(arguments);
    console.log('Start application', args);
    Chaplin.Application.prototype.start.apply(this, args);
  },
});

module.exports = Application;
