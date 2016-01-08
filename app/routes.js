var routes = function(match) {

  /* Suppliers */
  match('', 'supplier#list', {name: 'supplier_list'});
  match('suppliers', 'supplier#list', {name: 'supplier_list'});
  match('suppliers/:id', 'supplier#show', {name: 'supplier_show'});

  /* Human Resources */
  match('hr', 'hr#list', {name: 'hr_list'});
  match('hr/:id', 'hr#show', {name: 'hr_show'});
};

module.exports = routes;
