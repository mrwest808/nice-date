'use strict';

module.exports = function(expect, test, date) {
  describe("NiceDate.prototype.show", function() {

    describe("show.day", function() {
      describe("value", function() {
        test.range(date.show("day"), 1, 31);
      });
      describe("alias", function() {
        test.defined(date.show("d"));
      });
    });

    describe("show.weekday", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("weekday"));
      });
      describe("alias", function() {
        test.defined(date.show("wd"));
      });
    });

    describe("show.weekdayShort", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("weekdayShort"));
      });
      describe("alias", function() {
        test.defined(date.show("wds"));
      });
    });

    describe("show.week", function() {
      describe("value", function() {
        test.range(date.show("week"), 1, 53);
      });
      describe("alias", function() {
        test.defined(date.show("w"));
      });
    });

    describe("show.month", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("month"));
      });
      describe("alias", function() {
        test.defined(date.show("m"));
      });
    });

    describe("show.monthShort", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("monthShort"));
      });
      describe("alias", function() {
        test.defined(date.show("ms"));
      });
    });

    describe("show.isoDate", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("isoDate"));
      });
      describe("alias", function() {
        test.defined(date.show("isod"));
      });
    });

    describe("show.isoDateTime", function() {
      describe("value", function() {
        test.nonEmptyString(date.show("isoDateTime"));
      });
      describe("alias", function() {
        test.defined(date.show("isodt"));
      });
    });

  });
};