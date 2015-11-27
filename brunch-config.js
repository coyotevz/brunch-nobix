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

    nunjucks: {
      templatePath: 'app/'
    }
  }
};
