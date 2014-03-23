'use strict';

var grunt = require('grunt');
var swig = require('swig');

swig.setDefaults({
  loader: swig.loaders.fs(process.cwd())
});

exports.rus_swig = {
  base: function(test) {
    test.expect(1);

    var jsonConfig = grunt.file.readJSON('test/json/test.json');
    var expected = swig.renderFile('test/templates/base.tmpl.html', jsonConfig);
    var actual = grunt.file.read('tmp/base.html');

    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  },
  extend: function(test) {
    test.expect(2);

    var compiled = swig.compileFile('test/templates/extend.tmpl.html');

    var jsonConfig = grunt.file.readJSON('test/json/test.json');
    var actual = grunt.file.read('tmp/extend.html');
    test.equal(actual, compiled(jsonConfig), 'should describe what the default behavior is.');

    jsonConfig = grunt.file.readJSON('test/json/test2.json');
    actual = grunt.file.read('tmp/extend2.html');
    test.equal(actual, compiled(jsonConfig), 'should describe what the default behavior is.');
    test.done();
  }
};
