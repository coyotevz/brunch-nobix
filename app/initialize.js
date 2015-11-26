var Application = require('application');
var routes = require('routes');

$(function() {

  // Cross domain CORS support for backbone.js
  $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    options.crossDomain = true;
    options.xhrFields = {
      withCredentials: true,
    };
  });

  var app = new Application({
    routes: routes,
    pushState: false,
  });

  return app;
});
