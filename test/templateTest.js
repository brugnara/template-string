/*
 * TemplateString - Simple template strings
 * Copyright (c) Dan Phillimore (asmblah)
 * https://github.com/asmblah/template-string/
 *
 * Released under the MIT license
 * https://github.com/asmblah/template-string/raw/master/MIT-LICENSE.txt
 */

'use strict';

var _ = require('lodash'),
    expect = require('chai').expect,
    templateString = require('..');

describe('templateString()', function () {
    _.each({
        'with an empty string': {
            string: '',
            variables: {},
            expectedResult: ''
        },
        'with no placeholders': {
            string: 'hello world',
            variables: {},
            expectedResult: 'hello world'
        },
        'unspecified placeholders should be ignored': {
            string: 'hello ${there} world',
            variables: {},
            expectedResult: 'hello ${there} world'
        },
        'with placeholder specified': {
            string: 'hello world from ${who}',
            variables: {
                who: 'Fred'
            },
            expectedResult: 'hello world from Fred'
        },
        'with same placeholder multiple times': {
            string: 'hello world from ${who}, yes ${who}',
            variables: {
                who: 'John'
            },
            expectedResult: 'hello world from John, yes John'
        }
    }, function (scenario, description) {
        describe(description, function () {
            it('should return the expected result', function () {
                expect(templateString(scenario.string, scenario.variables)).to.equal(scenario.expectedResult);
            });
        });
    });
});