/* global _ $ */
var View = require('views/base/view');

// NOTE: We are wrapping Bootstrap modal dialog.

var DialogContentView = View.extend({
  template: 'base/dialog/content.html',
  noWrap: false,
  optionNames: View.prototype.optionNames.concat([
    'dialog', 'title', 'text', 'closeButton', 'buttons', 'template', 'dialog_class',
  ]),

  initialize: function() {
    View.prototype.initialize.apply(this, arguments);
    this.closeButton = (this.closeButton === undefined) ? true : this.closeButton;
    for (var key in this.buttons) {
      this.delegate('click', '[name='+key+']',
        _.wrap(this.buttons[key].action, this.wrapper)
      );
    }
  },

  wrapper: function(action, evt) {
    return action(this.dialog, evt);
  },

  getTemplateData: function() {
    return this;
  },
});

var DialogView = View.extend({
  template: 'base/dialog/dialog.html',
  container: 'body',

  events: {
    'click [name=modal-close]': 'close',
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
      this.subview('modal-content').trigger('show');
      this.reposition();
      $(window).on('resize.nbsDialog',
                   _.debounce(_.bind(this.reposition, this), 200));
    });

    this.delegate('hidden.bs.modal', function() {
      this.subview('modal-content').trigger('hide');
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
    this.subview('modal-content').trigger('beforeReposition');
    this.$d.css({
      'transform': 'translateY(' + ($(window).height() - this.$d.height())/2 + 'px)',

    });
    this.subview('modal-content').trigger('afterReposition');
  },

  /* API Details:
   * dialog.run({
   *   title: 'Some title',
   *   text: 'Hello, we are in dialog paragraph.',
   *   view: CustomContentView, // inherited from DialogContentView
   *   template: 'templates/body.html', // extend from dialog_content.html
   *   buttons: {
   *     'success': {
   *       'label': 'OK',
   *       'style': 'primary',
   *       'action': <some callback>(dialog,),
   *     },
   *     'cancel': {
   *       'label': 'Cancel',
   *       <style=btn-default> as default,
   *       'action': <some callback>(dialog,),
   *     }
   *   }
   * });
   */

  run: function(options) {
    var ContentView = options.view || DialogContentView;
    delete options.view;

    options = _.extend({
      className: 'modal-content',
      container: this.$d,
      dialog: this,
      buttons: {},
    }, options);

    this.subview('modal-content', new ContentView(options));
    this.show();
  },
});

DialogView.DialogContentView = DialogContentView;

module.exports = DialogView;
