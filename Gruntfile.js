module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    banner: '/**\n' +
    '* Package: <%= pkg.name %> - v<%= pkg.version %> \n' +
    '* Description: <%= pkg.description %> \n' +
    '* Last build: <%= grunt.template.today("yyyy-mm-dd") %> \n' +
    '* @author <%= pkg.author %> \n' +
    '* @license <%= pkg.license %> \n'+
    '*/\n',

    jshint: {
      options: {
        node: true,
        esversion: 6,
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        browser: true,
        jasmine: true,
        globals: {
          angular: true,
          inject: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      source: {
        src: ['dist/<%= pkg.name %>.js', 'test/**/*.js']
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: false,
      },
      my_target: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },

    watch: {

      options: {
        livereload: true,
        spawn: false,
        interrupt: true
      },

      grunt: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:gruntfile']
      },

      scripts: {
        files: ['dist/<%= pkg.name %>.js'],
        tasks: ['jshint', 'uglify']
      }

    },

    connect: {
      server: {
        options: {
          port: 9000,
          livereload: true,
          open: true
        }
      }
    }

  });

  // Load vendor tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // default task
  grunt.registerTask('default', ['serve']);

  // build task (no watch)
  grunt.registerTask('build', ['jshint', 'uglify']);

  // Start the development server
  grunt.registerTask('serve', ['connect', 'watch']);

};
