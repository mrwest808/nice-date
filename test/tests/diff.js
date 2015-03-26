'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("NiceDate.prototype.diff", function() {

    describe("diff.default", function() {
      describe("with past date", function() {
        var past = new Date(),
            past = new Date((past.getFullYear() - 2) + "-01-01"),
            date = new NiceDate(past);

        it("should be a string that contains 'ago'", function() {
          expect(date.diff()).to.be.a("string").and.contain("ago");
        });
      });

      describe("with future date", function() {
        var future = new Date(),
            future = new Date((future.getFullYear() + 2) + "-01-01"),
            date = new NiceDate(future);

        it("should be a string that contains 'in", function() {
          expect(date.diff()).to.be.a("string").and.contain("in");
        });
      });

      describe("with current date", function() {
        var date = new NiceDate();

        it("should be 'Just now'", function() {
          expect(date.diff()).to.equal("Just now");
        });
      });
    });

    describe("diff.minutes", function() {
      var future = new NiceDate().add(2, "mi");

      describe("a 2 minute date difference", function() {
        it("should return 2", function() {
          expect(future.diff("minutes")).to.equal(2);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("mi")).to.equal(future.diff("minutes"));
        });
      });
    });

    describe("diff.hours", function() {
      var future = new NiceDate().add(1, "d");

      describe("a 24 hour date difference", function() {
        it("should return 24", function() {
          expect(future.diff("hours")).to.equal(24);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("h")).to.equal(future.diff("hours"));
        });
      });
    });

    describe("diff.days", function() {
      var future = new NiceDate().add(3, "d");

      describe("a 3 day date difference", function() {
        it("should return 3", function() {
          expect(future.diff("days")).to.equal(3);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("d")).to.equal(future.diff("days"));
        });
      });
    });

    describe("diff.weeks", function() {
      var future = new NiceDate().add(4, "w");

      describe("a 4 week date difference", function() {
        it("should return 4", function() {
          expect(future.diff("weeks")).to.equal(4);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("w")).to.equal(future.diff("weeks"));
        });
      });
    });

    describe("diff.months", function() {
      var future = new NiceDate().add(5, "m");

      describe("a 5 month date difference", function() {
        it("should return 5", function() {
          expect(future.diff("months")).to.equal(5);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("m")).to.equal(future.diff("months"));
        });
      });
    });

    describe("diff.years", function() {
      var future = new NiceDate().add(6, "y");

      describe("a 6 year date difference", function() {
        it("should return 6", function() {
          expect(future.diff("years")).to.equal(6);
        });
      });

      describe("aliases", function() {
        it("should be defined correctly", function() {
          expect(future.diff("y")).to.equal(future.diff("years"));
        });
      });
    });

  });
};