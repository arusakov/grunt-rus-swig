/*
 * grunt-rus-swig
 * https://github.com/arusakov/grunt-rus-swig
 *
 * Copyright (c) 2014 arusakov
 * Licensed under the MIT license.
 */

'use strict';
var swig = require('swig');

swig.setDefaults({
  loader: swig.loaders.fs(process.cwd())
});

module.exports = function(grunt) {

  grunt.registerMultiTask('rus_swig', 'Grunt plugin for swig template engine', function() {
    var data = this.data;

    if (!data.src || !grunt.file.exists(data.src)) {
      grunt.log.warn('Template file "' + data.src + '" not found.');
      return false;
    }

    if (!data.dest || Object.keys(data.dest).length === 0) {
      grunt.log.warn('Dest "' + data.src + '" not found.');
      return false;
    }

    var compiledTemplate = swig.compileFile(data.src);
    var jsonFilePath;
    for (jsonFilePath in data.dest) {
      var json = grunt.file.readJSON(jsonFilePath + '.json');
      var dest = data.dest[jsonFilePath];
      if (Array.isArray(dest)) {
        var i = dest.length;
        var content = compiledTemplate(json);
        while (i--) {
          grunt.file.write(dest[i] + '.html', content);
        }
      } else {
        grunt.file.write(dest + '.html', compiledTemplate(json));
      }
    }
  });

};
