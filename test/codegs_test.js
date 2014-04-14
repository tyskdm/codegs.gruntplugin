'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.codegs = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  case_01: function(test) {
    test.expect(1);
    // console.log('');

    var actual = grunt.file.read('tmp/case_01.js').match(/^require\('module'\)\.(define|runmain)\('(.+)'(,|\);)$/gm);
    // console.log(actual);

    var expected = grunt.file.read('test/case_01/expected').split('\n');
    // console.log(expected);

    test.deepEqual(actual, expected, 'should describe what the custom option(s) behavior is.');

    test.done();
  }
  //default_options: function(test) {
  //  test.expect(1);
  //
  //  var actual = grunt.file.read('tmp/default_options');
  //  var expected = grunt.file.read('test/expected/default_options');
  //  test.equal(actual, expected, 'should describe what the default behavior is.');
  //
  //  test.done();
  //},
  //custom_options: function(test) {
  //  test.expect(1);
  //
  //  var actual = grunt.file.read('tmp/custom_options');
  //  var expected = grunt.file.read('test/expected/custom_options');
  //  test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');
  //
  //  test.done();
  //},
};
