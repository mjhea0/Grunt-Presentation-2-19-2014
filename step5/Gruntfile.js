'use strict';

module.exports = function(grunt) {

  var config = {};
  config.root = 'public';
  config.buildRoot = 'build';
  config.css = config.root + '/css';
  config.js = config.root + '/js';
  config.images = config.root + '/public';

  grunt.initConfig({
    copy: {
      css: {
        expand: true,
        cwd: config.css + '/',
        src: '**',
        dest: config.buildRoot + '/css/'
      },
      require: {
        expand: true,
        cwd: config.js + '/lib/',
        src: 'require.js',
        dest: config.buildRoot + '/js/lib/'
      },
      index: {
        expand: true,
        cwd: config.root + '/',
        src: 'index.html',
        dest: config.buildRoot + '/'
      }
    },
    uglify: {
      my_target: {
        files: {
          'build/js/main.js': ['public/js/lib/jquery.js', 'public/js/main.js']
        }
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/css/normalize.css', 'public/css/main.css'],
        dest: 'build/css/main.js'
      },
    },
    replace: {
      build: {
        src: ['build/index.html'],
        overwrite: true, // overwrite matched source files
        replacements: [{
          from: ' <link rel="stylesheet" href="css/normalize.css">',
          to: ''
        }]
      },

    },
    requirejs: {
      compile: {
        options: {
          baseUrl: config.js + '/',
          mainConfigFile: config.js + '/config.js',
          out: 'build/js/main.js',
          optimize: 'uglify',
          name: 'main',

          findNestedDependencies: true,

          has: {
            debugMode: false
          }
        }
      }
    },
    jshint: {
      files: ['public/js/*.js'],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: ['public/js/*.js'],
        tasks: ['jshint', 'copy', 'requirejs'],
        options: {
          spawn: false,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jshint', 'copy', 'concat', 'replace', 'requirejs']);

};