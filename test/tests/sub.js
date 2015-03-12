'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("NiceDate.prototype.sub", function() {

    describe("sub.days", function() {
      var now = Date.now(),
          normal = new NiceDate(now).sub(1, "days"),
          alias1 = new NiceDate(now).sub(1, "day"),
          alias2 = new NiceDate(now).sub(1, "d");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("24h ago");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("sub.weeks", function() {
      var now = Date.now(),
          normal = new NiceDate(now).sub(2, "weeks"),
          alias1 = new NiceDate(now).sub(2, "week"),
          alias2 = new NiceDate(now).sub(2, "w");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("2w ago");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("sub.months", function() {
      var now = Date.now(),
          normal = new NiceDate(now).sub(2, "months"),
          alias1 = new NiceDate(now).sub(2, "month"),
          alias2 = new NiceDate(now).sub(2, "m");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("2m ago");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("sub.years", function() {
      var now = Date.now(),
          normal = new NiceDate(now).sub(2, "years"),
          alias1 = new NiceDate(now).sub(2, "year"),
          alias2 = new NiceDate(now).sub(2, "y");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("2y ago");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

  });
};