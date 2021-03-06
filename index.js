/*
 * TemplateString - Simple template strings
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/template-string/
 *
 * Released under the MIT license
 * https://github.com/asmblah/template-string/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('microdash');

function templateString(string, variables) {
    _.forOwn(variables, function (value, name) {
        var pattern = new RegExp(('${' + name + '}').replace(/[^a-z0-9]/g, '\\$&'), 'g');

        string = string.replace(pattern, value);
    });

    // removes remaining not matched entries and return string

    return string.replace(/\${\w+}/g, '');
}

module.exports = templateString;
