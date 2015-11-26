var Layout = require('views/layout');

// The application object.
module.exports = Application = Chaplin.Application.extend({
  title: 'Nobix',

  initLayout: function(options) {
    options = options || {};
    options.title = options.title || this.title;
    this.layout = new Layout(options);
  },

  initMediator: function() {
    // Set available modules
    Chaplin.mediator.modules = [
      //{name: 'dashboard', title: 'Tablero', icon: 'mdi-action-home'},
      //{name: 'sales', title: 'Ventas', icon: 'mdi-action-store'},
      //{name: 'purchases', title: 'Compras', icon: 'mdi-action-shopping-cart'},
      {name: 'suppliers', title: 'Proveedores', icon: 'mdi-social-domain'},
      //{name: 'products', title: 'Productos', icon: 'mdi-maps-local-offer'},
      {name: 'hr', title:'Personal', icon: 'mdi-social-people'},
      //{name: 'finances', title: 'Finanzas', icon: 'mdi-action-trending-up'},
    ];

    Application.__super__.initMediator.call(this);
  },

  start: function() {
    var args = [].slice.call(arguments);
    console.log('Start application', args);
    Application.__super__.start.apply(this, args);
  }
});
