'use strict';

var grunt = require('grunt');
var swig = require('swig');

swig.setDefaults({
  loader: swig.loaders.fs(__dirname + '/../')
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
    test.expect(1);

    var jsonConfig = grunt.file.readJSON('test/json/test.json');
    var expected = swig.renderFile('test/templates/extend.tmpl.html', jsonConfig);
    var actual = grunt.file.read('tmp/extend.html');

    test.equal(actual, expected, 'should describe what the default behavior is.');
    test.done();
  }
};
