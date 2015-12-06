var PaginatedCollection = require('models/base/paginated_collection');
var Employee = require('models/employee');

var EmployeeCollection = PaginatedCollection.extend({
  model: Employee,
  urlRoot: '/employees',

  initialize: function() {
    EmployeeCollection.__super__.initialize.apply(this, arguments);
    this.fetch();
  },
});

module.exports = EmployeeCollection;
