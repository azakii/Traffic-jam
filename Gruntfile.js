module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'css/main.css': 'scss/main.scss',
              'css/rtl.css': 'scss/rtl.scss',
              'css/responsive.css': 'scss/responsive.scss'
		    }
		  },
        dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none',
        },
        files: {
          'css/main-min.css': 'scss/main.scss',
          'css/rtl-min.css': 'scss/rtl.scss'
        }
      },
		},

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}