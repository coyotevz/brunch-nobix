var Pace = require('pace');
var $ = require('jquery');
var Application = require('application');
var routes = require('routes');

$(function() {

  Pace.start({
    restartOnRequestAfter: false,
  });

  Pace.on('hide', function() {
    Chaplin.mediator.publish('pace:hide');
  });

  Pace.on('done', function() {
    Chaplin.mediator.publish('pace:done');
  });

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
