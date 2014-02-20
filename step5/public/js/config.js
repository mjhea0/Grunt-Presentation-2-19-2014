'use strict';


requirejs.config({
  paths: {
    jquery: 'lib/jquery'
  },
  shim: {
    jquery: {
      exports: '$'
    }
  }
});