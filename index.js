/**
 * week-hours <https://github.com/datetime/week-hours>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

/**
 * Get the number of hours in a week.
 *
 * **Example:**
 *
 * ```js
 * var weekHours = require('week-hours');
 *
 * weekHours();
 * //=> 168
 * ```
 *
 * @name weekHours
 * @return {Number}
 * @api public
 */
module.exports = function weekHours(date) {
  return 7 * 24;
};
