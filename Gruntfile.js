/*
 * grunt-codegs
 * https://github.com/tsuyoshi/codegs.grunt
 *
 * Copyright (c) 2014 Tsuyoshi Kodama
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    codegs: {
      case_01: {
        options: {
          packagefile: null,
          rootdir: null,
          mainfile: null,
          core: null,
          node_core: null,
          node_modules: null,
          kernel: null
        },
        files: {
          'tmp/case_01.js': [
              'test/case_01/main.js',
              'test/case_01/sub.js'
          ]
        }
      }
      //case_01: {
      //  options: {
      //    packagefile: 'test/case_01/package.json',
      //    rootdir: '',
      //    mainfile: '',
      //    core: '',
      //    node_core: '',
      //    node_modules: [],
      //    kernel: ''
      //  },
      //  files: {
      //    'tmp/case_01.js': [
      //        'test/case_01/testing',
      //        'test/case_01/123'
      //    ]
      //  }
      //}
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'codegs', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
