'use strict';

var expect = require('chai').expect;
var htmlsupply = require('../index');
var client = htmlsupply.client;

describe('#htmlsupply', function() {
    it('should return a string', function() {
        var result = client();
        expect(result).to.be.a('string');
    });
});
