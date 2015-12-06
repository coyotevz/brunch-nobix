var View = require('views/base/view');

var CollectionView = Chaplin.CollectionView.extend({
  /* This class doesn't inherit from the application-specific View class,
   * so we need to borrow the methods from the view prototype.
   */
  getTemplateFunction: View.prototype.getTemplateFunction,
  reuse: View.prototype.reuse,

});

module.exports = CollectionView;
