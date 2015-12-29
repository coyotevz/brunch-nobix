var View = require('views/base/view');

// NOTE: We are wrapping Bootstrap modal dialog.

var DialogContentView = View.extend({
  template: 'common/dialog_content.html',
  noWrap: false,
  optionNames: View.prototype.optionNames.concat([
    'dialog', 'title', 'text', 'closeButton', 'buttons', 'template'
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
  //autoRender: false,
  template: 'common/dialog.html',
  noWrap: true,

  events: {
    'click [name=modal-close]': 'close',
  },

  render: function() {
    console.log('Dialog#render()');
    View.prototype.render.apply(this, arguments);
    this.delegate('shown.bs.modal', function() {
      this.subview('modal-content').trigger('show');
      $(window).on("resize.myDialog",
                   _.debounce(_.bind(this.reposition, this), 200));
    });
    this.delegate('shown.bs.modal', this.reposition);

    this.delegate('hidden.bs.modal', function() {
      this.subview('modal-content').trigger('hide');
      $(window).off("resize.myDialog");
    });

    this.$el.modal({
      show: false,
    });

    this.$d = this.$('.modal-dialog');

    // Grab global copy of this instance
    window._dialog = this;
  },

  reposition: function() {
    this.subview('modal-content').trigger('beforeReposition');
    this.$d.css({
      'left': ($(window).width() - this.$d.width()) / 2,
      'top': ($(window).height() - this.$d.height()) / 2,
    });
    this.subview('modal-content').trigger('afterReposition');
  },

  show: function() {
    this.$el.modal('show');
  },

  hide: function() {
    this.$el.modal('hide');
  },

  close: function() {
    this.$el.modal('hide');
    this.removeSubview('modal-content');
  },

  toggle: function() {
    this.$el.modal('toggle');
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
    var defaults = {
      className: 'modal-content',
      container: this.$d,
      dialog: this,

      title: null,
      text: null,
      buttons: {},
    };
    var ContentView = options.view || DialogContentView;
    delete options.view;
    options = _.extend(defaults, options);

    this.subview('modal-content', new ContentView(options));
    this.show();
  },
});

DialogView.DialogContentView = DialogContentView;

module.exports = DialogView;
