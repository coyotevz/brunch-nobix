/* Nobix Form Row:
 * Based on behaviour of Google Contacts form (at 2016-01-18)
 */

/* global jQuery */

(function($) {
  'use strict';

  // FORM ROW CLASS DEFINITION
  // =========================

  var FormRow = function(element, options) {
    this.options = options;
    this.$element = $(element);
    this.$label = this.$element.find('.row-label .label input');
    this.$field = this.$element.find('.row-field input');
    this.$action = this.$element.find('.row-action');

    this._bindEvents();
    this.$field.trigger('change');
  };

  FormRow.DEFAULTS = {
  };

  $.extend(FormRow.prototype, {
    _bindEvents: function() {
      this.$label.on('focusin.nobix.form-row', $.proxy(this.focusField, this));
      this.$element.on('mouseenter.nobix.form-row', $.proxy(this.onMouseEnter, this));
      this.$element.on('mouseleave.nobix.form-row', $.proxy(this.onMouseLeave, this));
      this.$field.on('focusin.nobix.form-row', $.proxy(this.onFocusedField, this));
      this.$field.on('focusout.nobix.form-row', $.proxy(this.onBlurField, this));
      this.$field.on('change.nobix.form-row keyup.nobix.form-row',
                     $.proxy(this.onChangeField, this));
      this.$action.on('click.nobix.form-row', 'i', $.proxy(this.onClickAction, this));
    },

    focusField: function() {
      this.$field.focus();
    },

    onMouseEnter: function() {
      this.add('mouse-hover');
    },

    onMouseLeave: function() {
      this.remove('mouse-hover');
    },

    onFocusedField: function() {
      this.add('focused-input');
    },

    onBlurField: function() {
      this.remove('focused-input');
    },

    onChangeField: function() {
      if (!$.trim(this.$field.val())) {
        this.remove('has-content');
      } else {
        this.add('has-content');
      }
    },

    onClickAction: function() {
      this.$field.val('').trigger('change');
    },

    add: function(attribute) {
      this.$element.addClass(attribute);
    },

    remove: function(attribute) {
      this.$element.removeClass(attribute);
    },
  });

  // FORM ROW PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('nobix.form-row');
      var options = $.extend({}, FormRow.DEFAULTS, $this.data(), typeof option === 'object' && option);

      if (!data) $this.data('nobix.form-row', (data = new FormRow(this, options)));
      if (typeof option === 'string') data[option]();
    });
  }

  $.fn.formRow = Plugin;
  $.fn.formRow.constructor = FormRow;
}(jQuery));
