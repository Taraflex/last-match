'use strict';

/**
 * @param {string} s
 * @param {RegExp} re
 * @return {string}
 */
module.exports = function (s, re) {
    const m = s && s.match(re);
    return m && m.length > 0 ? m[m.length - 1] : null;
};
