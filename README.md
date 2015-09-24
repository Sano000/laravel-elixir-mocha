# laravel-elixir-mocha

Wraps gulp-mocha for laravel-elixir (>3.0)

## Install

```sh
$ npm install laravel-elixir-mocha --save-dev
```

## Usage

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-mocha');

elixir(function(mix) {
    mix.mocha([
      'tests/**/*Spec.js'
    ], {
      reporter: 'nyan'
    });
});
```
