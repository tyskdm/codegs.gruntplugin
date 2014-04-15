# grunt-codegs

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide,
as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-codegs --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-codegs');
```

## The "codegs" task

### Overview
In your project's Gruntfile, add a section named `codegs` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  codegs: {
    options: {
      packagefile:  null,           // path
      rootdir:      null,           // path, default = './'
      mainfile:     'src/main.js',
      core:         null,           // path
      node_core:    null,           // path
      node_modules: null,           // array of module names
      kernel:       null            // path
    },
    files: {
      'tmp/out.js': [               // target filepath
        'src'                       // path
      ]
    }
  },
});
```

### Options

See more > [codegs](https://github.com/tyskdm/codegs)

### Usage Examples


## Contributing


## Release History
