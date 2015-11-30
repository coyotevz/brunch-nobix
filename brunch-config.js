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
      }
    },
    stylesheets: {
      joinTo: 'css/app.css'
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
