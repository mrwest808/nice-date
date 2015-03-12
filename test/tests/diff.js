'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("NiceDate.prototype.diff", function() {

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
};