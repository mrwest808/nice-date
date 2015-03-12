'use strict';

var chai = require('chai'),
    expect = chai.expect;

var test = require('./helpers'),
    NiceDate = require('../dist/nd');

require('./tests/instantiate')(expect, test, NiceDate);
require('./tests/get')(expect, test, NiceDate);
require('./tests/diff')(expect, test, NiceDate);
require('./tests/add')(expect, test, NiceDate);
require('./tests/sub')(expect, test, NiceDate);
require('./tests/daysOf')(expect, test, NiceDate);