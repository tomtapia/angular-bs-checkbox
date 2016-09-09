'use strict';

module.exports = function(grunt) {

  require('jit-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    // Configuration
    pkg: grunt.file.readJSON('package.json'),
    folders: {
      src: 'src',
      test: 'test',
      dist: 'dist'
    },
    meta: {
      banner: [
        '/*',
        ' * <%= pkg.name %>',
        ' * <%= pkg.homepage %>\n',
        ' * Version: <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
        ' * License: <%= pkg.license %>',
        ' */'
      ].join('\n')
    },

    // Make sure there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= folders.src %>/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: '<%= folders.test %>/.jshintrc'
        },
        src: ['<%= folders.test %>/spec/{,*/}*.js']
      }
    },

    // Make sure code styles are up to par
    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= folders.src %>/{,*/}*.js'
        ]
      },
      test: {
        src: ['<%= folders.test %>/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= folders.dist %>/{,*/}*',
            '<%= folders.dist %>/.git{,*/}*'
          ]
        }]
      }
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        src: '<%= folders.src %>/<%= pkg.name %>.js',
        dest: '<%= folders.dist %>/<%= pkg.name %>.min.js'
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: '<%= folders.test %>/karma.conf.js',
        singleRun: true
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', [
    'clean:dist',
    'jshint',
    'jscs',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'karma'
  ]);

};
