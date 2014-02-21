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
        separator: ';',
      },
      dist: {
        src: ['public/css/normalize.css', 'public/css/main.css'],
        dest: 'build/css/main.css',
      },
    },
    replace: {
      build: {
        src: ['build/index.html'],
        overwrite: true, // overwrite matched source files
        replacements: [{
          from: '<script src="js/lib/jquery.js"></script>',
          to: ''
        },{
          from: ' <link rel="stylesheet" href="css/normalize.css">',
          to: ''
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-text-replace');

  grunt.registerTask('build', ['copy', 'uglify', 'concat', 'replace']);

};