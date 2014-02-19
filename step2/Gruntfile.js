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
      jsLib: {
        expand: true,
        cwd: config.js + '/',
        src: '**',
        dest: config.buildRoot + '/js/'
      },
      index: {
        expand: true,
        cwd: config.root + '/',
        src: 'index.html',
        dest: config.buildRoot + '/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy'); 

};
