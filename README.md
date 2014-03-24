# grunt-rus-swig

> Grunt plugin for swig template engine

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rus-swig --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rus-swig');
```

## The "rus_swig" task

### Overview
In your project's Gruntfile, add a section named `rus_swig` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rus_swig: {
      target: {
        src: 'path/to/swig/template.html', // or .swig or any
        dest: {
          'path/to/json': 'tmp/base' // .json -> .html
        }
      }
    }
});
```
