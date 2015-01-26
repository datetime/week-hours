/**
 * week-hours <https://github.com/datetime/week-hours>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var weekHours = require('./index');

describe('week-hours:', function() {
  it('should get the number of hours in a week', function(done) {
    assert.strictEqual(weekHours(), 168);
    assert(typeof weekHours() === 'number');
    done();
  });
});
