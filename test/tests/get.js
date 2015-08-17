'use strict';

module.exports = function(expect, test, NiceDate) {
  var date = new NiceDate();

  describe("NiceDate.prototype.get", function() {

    describe("invalid parameter", function() {
      var fn = function() { date.get("abc"); };
      test.throwError(fn, ReferenceError);
    });

    describe("get.unix", function() {
      describe("value", function() {
        test.positiveNumber(date.get("unix"));
      });
      describe("alias", function() {
        test.defined(date.get("u"));
      });
    });

    describe("get.day", function() {
      describe("value", function() {
        test.range(date.get("day"), 1, 31);
      });
      describe("alias", function() {
        test.defined(date.get("d"));
      });
    });

    describe("get.weekday", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("weekday"));
      });
      describe("alias", function() {
        test.defined(date.get("wd"));
      });
    });

    describe("get.weekdayShort", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("weekdayShort"));
      });
      describe("alias", function() {
        test.defined(date.get("wds"));
      });
    });

    describe("get.week", function() {
      describe("value", function() {
        test.range(date.get("week"), 1, 53);
      });
      describe("alias", function() {
        test.defined(date.get("w"));
      });
    });

    describe("get.month", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("month"));
      });
      describe("alias", function() {
        test.defined(date.get("m"));
      });
    });

    describe("get.monthShort", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("monthShort"));
      });
      describe("alias", function() {
        test.defined(date.get("ms"));
      });
    });

    describe("get.year", function() {
      describe("value", function() {
        test.positiveNumber(date.get("year"));
      });
      describe("alias", function() {
        test.defined(date.get("y"));
      });
    });

    describe("get.yearShort", function() {
      describe("value", function() {
        test.positiveNumber(date.get("yearShort"));
      });
      describe("alias", function() {
        test.defined(date.get("ys"));
      });
    });

    describe("get.isoDate", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("isoDate"));
      });
      describe("alias", function() {
        test.defined(date.get("isod"));
      });
    });

    describe("get.isoDateTime", function() {
      describe("value", function() {
        test.nonEmptyString(date.get("isoDateTime"));
      });
      describe("alias", function() {
        test.defined(date.get("isodt"));
      });
    });

    describe('get.time', function() {
      describe('value', function() {
        test.nonEmptyString(date.get("time"));
      });
      describe('alias', function() {
        test.defined(date.get('t'));
      });
    });

  });
};