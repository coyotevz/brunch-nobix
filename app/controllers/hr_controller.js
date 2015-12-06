var Controller = require('controllers/base/controller');
var Employee = require('models/employee');
var EmployeeCollection = require('models/employee_collection');
var HRSideView = require('views/hr/side_view');
var EmployeeListView = require('views/hr/list_view');
var EmployeeDetailView = require('views/hr/detail_view');

var HumanResourcesController = Controller.extend({
  title: 'Human Resources',

  beforeAction: function() {
    HumanResourcesController.__super__.beforeAction.apply(this, arguments);
    this.reuse('sidebar', HRSideView);
    this.publishEvent('module:setCurrent', 'hr');
  },

  list: function(params) {
    console.log('HumanResources#list(%s)', JSON.stringify(params));
    this.employeeList = new EmployeeCollection();
    this.view = new EmployeeListView({
      collection: this.employeeList,
      region: 'main_content',
    });
  },

  show: function(params) {
    var model = new Employee({id: params.id});
    model.fetch();
    this.view = new EmployeeDetailView({
      region: 'main_content',
      model: model,
    });
  },
});

module.exports = HumanResourcesController;
