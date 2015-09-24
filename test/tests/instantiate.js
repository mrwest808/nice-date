'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("Instantiation", function() {

    describe("with an invalid date argument", function() {
      var fn = function() { new NiceDate("abc"); };
      test.throwError(fn, TypeError);
    });

    describe("without custom options", function() {
      it("should collect defaults", function() {
        var date = new NiceDate();
        expect(date.o.indicators.year).to.equal("y");
      });
    });

    describe("with custom options", function() {
      var date = new NiceDate(null, { indicators: { year: "x" } });
      it("should override targeted defaults", function() {
        expect(date.o.indicators.year).to.equal("x");
      });
      it("should keep unchanged defaults", function() {
        expect(date.o.indicators.month).to.equal("mn");
      });
    });

  });
};
