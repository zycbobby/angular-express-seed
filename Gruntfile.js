module.exports = function(grunt) {
	'use strict';

	//define tasks
	grunt.registerTask('server', ['connect:server', 'watch:server']);
	grunt.registerTask('auto_reload', ['watch:server']);

	//env cfg
	var pkg = grunt.file.readJSON('package.json');
	var cfg = {
		src: 'public',
		serverHost: '0.0.0.0',
		serverPort: 9000,
		livereload: 35729
	};

	//grunt config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/*
		 * static server
		 */
		connect: {
			options: {
				port: cfg.serverPort,
				hostname: cfg.serverHost,
				middleware: function(connect, options) {
					return [
						require('connect-livereload')({
							port: cfg.livereload
						}),
						connect.static(options.base),
                        connect.directory(options.base)
					];
				}
			},
			server: {
				options: {
					base: cfg.src
				}
			}
		},

		/*
		 * watch all the file in the app folder, and reload the page when needed
		 */
		watch: {
			options: {
				livereload: cfg.livereload
			},
			server: {
				files: ['Gruntfile.js', cfg.src + '**/**']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
};