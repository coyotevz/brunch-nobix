/* Nobix Form:
 * Based on behaviour of Google Contacts form (at 2016-01-18)
 */

/* global jQuery */

(function($) {
  'use strict';

  var FormRow = function(element, options) {
    this.options = null;
    this.$element = null;

    this.init(element, options);
  };


  // FORM ROW PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function() {
      var $this = $(this);
      var data = $this.data('nobix.form-row');
      var options = typeof option === 'object' && option;

    });
  }

  $.fn.formRow = Plugin;
  $.fn.formRow.Constructor = FormRow;
}(jQuery));
