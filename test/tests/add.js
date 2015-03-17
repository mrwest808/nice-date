'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("NiceDate.prototype.add", function() {

    describe("add.minutes", function() {
      var now = Date.now(),
          normal = new NiceDate(now).add(120, "minutes"),
          alias1 = new NiceDate(now).add(120, "minute"),
          alias2 = new NiceDate(now).add(120, "mi");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("in 2h");
        });

        describe("aliases", function() {
          it("should be defined correctly", function() {
            expect(alias1.get("u")).to.equal(normal.get("u"));
            expect(alias2.get("u")).to.equal(normal.get("u"));
          });
        });
      });
    });

    describe("add.days", function() {
      var now = Date.now(),
          normal = new NiceDate(now).add(1, "days"),
          alias1 = new NiceDate(now).add(1, "day"),
          alias2 = new NiceDate(now).add(1, "d");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("in 24h");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("add.weeks", function() {
      var now = Date.now(),
          normal = new NiceDate(now).add(2, "weeks"),
          alias1 = new NiceDate(now).add(2, "week"),
          alias2 = new NiceDate(now).add(2, "w");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("in 2w");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("add.months", function() {
      var now = Date.now(),
          normal = new NiceDate(now).add(2, "months"),
          alias1 = new NiceDate(now).add(2, "month"),
          alias2 = new NiceDate(now).add(2, "m");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("in 2m");
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(alias1.get("u")).to.equal(normal.get("u"));
          expect(alias2.get("u")).to.equal(normal.get("u"));
        });
      });
    });

    describe("add.years", function() {
      var now = Date.now(),
          normal = new NiceDate(now).add(2, "years"),
          alias1 = new NiceDate(now).add(2, "year"),
          alias2 = new NiceDate(now).add(2, "y");

      describe("value", function() {
        it("should be incremented correctly", function() {
          expect(normal.diff()).to.equal("in 2y");
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