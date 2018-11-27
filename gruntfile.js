module.exports = function gruntConfig(grunt) {
  require('load-grunt-tasks')(grunt);

  var files = ['gruntfile.js', 'index.js', 'test/**/*.js', 'lib/**/*.js'];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'lib/flatten-object.js': 'src/flatten-object.js',
          'test/test.spec.js': 'src/test.spec.js',
          'test/flatten-object.js': 'src/flatten-object.js',
        },
      },
    },

    eslint: {
      target: files,
    },

    mochaTest: {
      src: ['test/**/*.js'],
      options: {
        reporter: 'spec',
        require: ['babel/register', 'should'],
      },
    },

    watch: {
      scripts: {
        files: files,
        tasks: ['eslint'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['babel']);
  grunt.registerTask('test', ['eslint', 'babel', 'mochaTest']);
};
