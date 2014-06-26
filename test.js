'use strict';
var assert = require('assert');
var weekHours = require('./');

it('should get the number of hours in a week', function () {
  assert.strictEqual(weekHours(), 168);
  assert(typeof weekHours() === 'number');
});
