/*
 * Assemble
 * http://github.com/assemble/assemble
 *
 * Copyright (c) 2013 Assemble
 * MIT License
 */


module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    meta: {
      banner:
      '/**\n' +
      '* <%= pkg.name %>.js v<%= pkg.version %> by @fat & @mdo\n' +
      '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
      '* <%= pkg.licenses.url %>\n' +
      '*/'
    },


    // Release management
    release: {
      options: {
        pkgBump: true,
        compBump: true,
        add: false,
        commit: false,
        tag: false,
        push: false,
        pushTags: false,
        npm: false
      }
    },

    // Must have grunt 0.4.0 for this jshint config to work
    jshint: {
      files: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      individual_files: {
        files: [
          { src: 'Gruntfile.js' },
          { src: 'tasks/*.js' },
          { src: '<%= nodeunit.tests %>' }
        ]
      },
      options: {
        jshintrc: '.jshintrc',
      }
    },

    // Build example pages
    assemble: {
      options: {
        engine: 'handlebars',
        docs: true,
        production: false,
        flatten: true,
        assets: 'demo/assets',
        data:  [ 'bootstrap.json' ]
      },
      examples: {
        options: {
          layout: 'docs/_layouts/default.html',
          partials: [
            'docs/_includes/*.html'
          ]
        },
        files: {
          'demo':          [ 'docs/*.html' ],
          'demo/examples': [ 'docs/examples/*.html' ],
        }
      }
    },

    // Compile LESS with RECESS (http://twitter.github.com/recess/)
    recess: {
      // Default options
      options: grunt.file.readJSON('.recessrc'),
      css: {
        src:  'less/bootstrap.less',
        dest: 'docs/assets/css/bootstrap.css'
      },
      minify: {
        options: { compress: true },
        src:  'less/bootstrap.less',
        dest: 'bootstrap/css/bootstrap.min.css'
      }
    },

    // Concat JavaScripts in the order specified
    concat: {
      docs: {
        src: [
          'js/bootstrap-transition.js',
          'js/bootstrap-alert.js',
          'js/bootstrap-button.js',
          'js/bootstrap-carousel.js',
          'js/bootstrap-collapse.js',
          'js/bootstrap-dropdown.js',
          'js/bootstrap-modal.js',
          'js/bootstrap-tooltip.js',
          'js/bootstrap-popover.js',
          'js/bootstrap-scrollspy.js',
          'js/bootstrap-tab.js',
          'js/bootstrap-typeahead.js',
          'js/bootstrap-affix.js'
        ],
        dest: 'docs/assets/js/<%= pkg.name %>.js'
      },
      ghpages: {
        src: [
          'js/bootstrap-transition.js',
          'js/bootstrap-alert.js',
          'js/bootstrap-button.js',
          'js/bootstrap-carousel.js',
          'js/bootstrap-collapse.js',
          'js/bootstrap-dropdown.js',
          'js/bootstrap-modal.js',
          'js/bootstrap-tooltip.js',
          'js/bootstrap-popover.js',
          'js/bootstrap-scrollspy.js',
          'js/bootstrap-tab.js',
          'js/bootstrap-typeahead.js',
          'js/bootstrap-affix.js'
        ],
        dest: 'bootstrap/js/<%= pkg.name %>.js'
      },
      dist: {
        src: [
          '<banner:meta.banner>',
          '<file_strip_banner:lib/<%= pkg.name %>.js>'
        ],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    // Minify JavaScripts
    uglify: {
      docs: {
        src: ['<banner:meta.banner>', '<config:concat.docs.dest>'],
        dest: 'docs/assets/js/<%= pkg.name %>.min.js'
      },
      bootstrap: {
        src: ['<banner:meta.banner>', '<config:concat.docs.dest>'],
        dest: 'bootstrap/js/<%= pkg.name %>.min.js'
      }
    },

    // Compress (zip/gzip) source files
    compress: {
      docs: {
        files: {
          'bootstrap/bootstrap.zip': 'docs/**'
        }
      },
      ghpages: {
        files: {
          '../bootstrap-gh-pages/assets/bootstrap.zip': 'docs/**'
        }
      }
    },

    // Docs
    copy: {
      docs: {
        files: {
          'docs/assets/img/': ['img/*'],
          'docs/assets/js/': ['js/*.js', 'js/tests/vendor/jquery.js']
        },
        options: {
          flatten: true
        }
      },
      bootstrap: {
        files: {
          'bootstrap/img/': ['img/*']
        }
      },
      ghpages: {
        files: {
          '../bootstrap-gh-pages/': ['docs/*.html', 'docs/assets/**', 'docs/examples/**']
        }
      }
    },


    // Clean the root directory of prior builds.
    clean: {
      bootstrap: ['bootstrap']
    },


    // Run other gruntfiles in project
    subgrunt: {
      examples: [
        'examples/handlebars/Gruntfile.js',
        'examples/grid/Gruntfile.js'
      ]
    },

    watch: {
      js: {
        options: { debounceDelay: 250 },
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'mochaTest']
      },
      docs: {
        files: ['less/*.less', 'docs/templates/**/*.mustache', 'js/bootstrap-*.js'],
        tasks: 'bootstrap'
      },
      less: {
        files: ['less/*.less'],
        tasks: 'lessWatch'
      }
    }

  });

  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-release');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Load local tasks.
  grunt.loadTasks('tasks');


  // Default task.
  grunt.registerTask('default', [
    'assemble'
  ]);


  // Default task.
  grunt.registerTask('sub', [
    'subgrunt:examples'
  ]);

  // Tests to be run.
  grunt.registerTask('test', [
    'jshint',
    'mochaTest'
  ]);

  // Default task.
  grunt.registerTask('bump', [
    'test',
    'release'
  ]);
};
