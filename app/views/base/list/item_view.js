var View = require('views/base/view');

var ListItemView = View.extend({

  selected: false,
  optionNames: View.prototype.optionNames.concat(['parent']),

  listen: {
    'selected:change': 'onSelectChange',
  },

  render: function() {
    View.prototype.render.apply(this, arguments);
    this.delegate('change', ':checkbox', this.updateState);
    this.checkbox = this.$(':checkbox')[0];
  },

  updateState: function(trigger) {
    var opt = this.checkbox.checked;
    trigger = (trigger !== undefined) ? Boolean(trigger): true;
    if (opt !== this.selected) {
      this.selected = opt;
      if (trigger) {
        this.trigger('selected:change', this, opt);
      }
    }
  },

  toggleSelect: function(opt, trigger) {
    this.checkbox.checked = opt;
    this.updateState(trigger);
  },

  onSelectChange: function(view, opt) {
    view.$el.toggleClass('selected', opt);
  },

});

module.exports = ListItemView;
