/* global _ Backbone Chaplin */
var config = window.config || {};

var Model = Chaplin.Model.extend({

  initialize: function() {
    _.extend(this, Backbone.AssociatedModel);
    Chaplin.Model.prototype.initialize.apply(this, arguments);
  },

  url: function() {
    var base;

    if (this.collection) {
      base = _.result(this.collection, 'url');
    } else if (this.urlRoot) {
      base = (config.urlRoot || '') + this.urlRoot;
    } else {
      throw new Error('A "urlRoot" property must be specified');
    }
    if (this.isNew()) return base;
    return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
  },

  // short cut for check backbone.trackit
  isTracked: function() {
    return this._trackingChanges;
  },

  // short cut for backbone.trackit
  isChanged: function() {
    return !_.isEmpty(this._unsavedChanges);
  },

});

module.exports = Model;
