var backslashRe = new RegExp('\\\\', 'g');
var dotRe = new RegExp('^(\.\.\/)*', 'g');
var wrapperRe = /\.\w+$/;

var cleanModuleName = function(path, nameCleaner) {
  return nameCleaner(path.replace(backslashRe, '/').replace(dotRe, ''));
}

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'js/app.js': /^app/,
        'js/vendor.js': /^(?!app)/
      },
      order: {
        before: [
          'bower_components/jquery/dist/jquery.js',
          'vendor/scripts/materialize/jquery.easing.1.3.js',
          'vendor/scripts/materialize/velocity.min.js',
          'vendor/scripts/materialize/hammer.min.js',
          'vendor/scripts/materialize/jquery.hammer.js',
          'vendor/scripts/materialize/dropdown.js',
          'vendor/scripts/materialize/waves.js',
          'vendor/scripts/materialize/sideNav.js',
          'vendor/scripts/materialize/cards.js',
          'vendor/scripts/bootstrap/modal.js',
        ]
      }
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        before: ['bower_components/normalize-css/normalize.css'],
        after: ['bower_components/h5bp-helpers/helpers.css']
      }
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },

  modules: {
    wrapper: function(path, data, isVendor) {
      if (isVendor || /\.html$/.test(path)) {
        return data;
      }
      var moduleName = cleanModuleName(path, exports.config.modules.nameCleaner).replace(wrapperRe, '');
      path = JSON.stringify(moduleName);
      return {
        prefix: "require.register(" + path + ", function(exports, require, module) {\n",
        suffix: '});\n\n',
      }
    }
  },

  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/,
      options: {
        bitwise: true,
        curly: true,
        undef: true,
        unused: true,
        strict: "global",
      },
      globals: {
        jQuery: true,
        console: true,
        //module: true,
      },
      warnOnly: true
    },

    //nunjucks: {
    //  templatePath: 'app/templates/'
    //}
  },

  server: {
    port: 8000,
  }
};
