'use strict';

define('main', ['config'], function(config) {
	require(['jquery'], function($) {
		var app = {
			initialize: function() {
				alert('it worked');
				$('p').hide();
			}
		};

		app.initialize();
	});
});