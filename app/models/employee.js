var Model = require('models/base/model');

var Employee = Model.extend({
  urlRoot: '/employees',
});

module.exports = Employee;
