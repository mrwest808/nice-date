'use strict';

var chai = require('chai'),
    expect = chai.expect;

var test = require('./helpers'),
    NiceDate = require('../dist/nd'),
    date = new NiceDate();

require('./tests/show')(expect, test, date);