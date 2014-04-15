/*
 * grunt-codegs
 * https://github.com/tsuyoshi/codegs.gruntplugin
 *
 * Copyright (c) 2014 Tsuyoshi Kodama
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var noError,
      path = require('path'),
      cwd = process.cwd();

  grunt.registerMultiTask('codegs', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      packagefile: null,
      rootdir: null,
      mainfile: null,
      core: null,
      node_core: null,
      node_modules: null,
      kernel: null
    });

    options.packagefile = options.packagefile ?
                          path.join(cwd, options.packagefile) : null;

    options.rootdir = options.rootdir ?
                          path.join(cwd, options.rootdir) : null;

    options.mainfile = options.mainfile ?
                          path.join(cwd, options.mainfile) : null;

    options.core = options.core ?
                          path.join(cwd, options.core) : null;

    options.node_core = options.node_core ?
                          path.join(cwd, options.node_core) : null;

    if (options.node_modules) {
      options.node_modules.forEach(function (filepath, idx, modules) {
        modules[idx] = path.join(cwd, filepath);
      });
    }

    options.kernel = options.kernel ?
                          path.join(cwd, options.karnel) : null;

    noError = true;

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {

      var sourcefiles = [];

      f.src.forEach(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          sourcefiles.push(path.join(cwd, filepath));
          return true;
        }
      });

      var error,
          codegs = require('codegs').create(),
          output = path.join(cwd, f.dest);

      if (options.packagefile) {
        error = codegs.loadPackageJson(options.packagefile);
        if (_check(error)) { return; }
      }

      error = codegs.addConfig(options);
      if (_check(error)) { return; }

      error = codegs.addConfig({
        source: sourcefiles,
        output: output
      });
      if (_check(error)) { return; }

      grunt.file.mkdir(path.dirname(output));
      error = codegs.run();
      if (_check(error)) { return; }

      // Print a noError message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });

    return noError;
  });

  function _check(error) {
    if (error !== null) {
      if (error.substr(0, 6) === 'Error:') {
        grunt.log.warn(error);
        noError = false;
        return true;

      } else {
        grunt.log.writeln(error);
      }
    }
    return false;
  }
};
