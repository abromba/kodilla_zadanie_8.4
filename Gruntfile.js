module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['comp.png'],
          dest: 'images/build/'
        }]
      }
    },
    watch: {
      styles: {
        files: ['sass/main.sass'],
        tasks: ['sass'],
        options: {
           spawn: false,
        },
      },
	   js: {
        files: ['js/*.js'],
        tasks: ['jshint'],
        options: {
           spawn: false,
        },
      }
    },
    browserSync: {
      bsFiles: {
        src : ['css/main.css', 'index.html']

      },
      options: {
		  watchTask: true,
        server: {
           baseDir: "./"
        }
      }
    },
    jshint: {
      all: ['js/*.js'],
      options: {
        force: true
      }
    }
  });
 
  // Load the plugins tasks 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Default task(s).
  grunt.registerTask('default', ['sass', 'imagemin', 'browserSync', 'jshint', 'watch']);
};