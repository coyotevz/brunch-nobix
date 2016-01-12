/* global _ $ */

var View = require('views/base/view');

// NOTE: We are wrapping Bootstrap modal dialog.
var DialogView = View.extend({
  container: 'body',
  template: 'base/dialog/content.html',
  optionNames: View.prototype.optionNames.concat([
    'title', 'text', 'closeButton', 'buttons', 'dialog_class',
  ]),

  getTemplateData: function() {
    return this;
  },

  render: function() {
    View.prototype.render.apply(this, arguments);

    // initialize backbone modal plugin
    this.$el.modal({
      show: false,
    });

    // grab for future use
    this.$d = this.$('.modal-dialog');

    this.delegate('shown.bs.modal', function() {
      this.trigger('show');
      this.reposition();
      $(window).on('resize.nbsDialog',
                   _.debounce(_.bind(this.reposition, this), 200));
    });

    this.delegate('hidden.bs.modal', function() {
      this.trigger('hide');
      this.close();
      $(window).off('resize.nbsDialog');
    });
  },

  show: function() {
    this.$el.modal('show');
  },

  close: function() {
    this.$el.modal('hide');
    this.dispose();
  },

  reposition: function() {
    this.$d.css({
      'transform': 'translateY(' + ($(window).height() - this.$d.height())/2 + 'px)',
    });
  },

  run: function() {
    this.show();
  },
});

module.exports = DialogView;
