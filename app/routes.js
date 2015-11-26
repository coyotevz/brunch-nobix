var Chaplin = require('chaplin');

module.exports = function(match) {
  match('', 'home#index'); // only for test

  //match('', 'supplier#list', {name: 'supplier_list'});
  match('suppliers', 'supplier#list', {name: 'supplier_list'});
  match('suppliers/:id', 'suppliers#show', {name: 'supplier_show'});

  match('hr', 'hr#list', {name: 'hr_list'});
  match('hr/:id', 'hr#show', {name: 'hr_show'});
};
