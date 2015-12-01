var Model = require('./model');

var config = window.config || {};

var Collection = Chaplin.Collection.extend({
  model: Model,

  // Mixin a syncrhonization state machine.
  initialize: function() {
    _.extend(this, Chaplin.SyncMachine);
    Collection.__super__.initialize.apply(this, arguments);
    this.on('request', this.beginSync);
    this.on('sync', this.finishSync);
    this.on('error', this.unsync);
  },

  url: function() {
    var base;
    if (!this.urlRoot) {
      throw new Error('A "urlRoot" property must be specified on Collection');
    }
    if (this.parents && this.parents.length == 1) {
      base = _.results(this.parents[0], 'url');
    } else {
      base = config.urlRoot || '';
    }
    return base.replace(/([^\/])$/, '$1') + this.urlRoot;
  }

});

module.exports = Collection;
