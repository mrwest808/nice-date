'use strict';

module.exports = function(expect, test, NiceDate) {
  describe("NiceDate.prototype.daysOf", function() {
    var date = new NiceDate();

    describe("with parameter 'week'", function() {
      it("should return an array with 7 items of type number", function() {
        var days = date.daysOf("week");

        days.forEach(function(day) {
          expect(day).to.be.a("number").above(0);
        });

        expect(days).to.be.of.length(7);
      });
    });

    describe("with parameter 'month'", function() {
      it("should return an array with 28-31 items of type number", function() {
        var days = date.daysOf("month");

        days.forEach(function(day) {
          expect(day).to.be.a("number").above(0);
        });

        expect(days).to.be.of.length.within(28, 31);
      });
    });

    describe("with parameter 'calendarMonth'", function() {
      it("should return an array with 35-42 items of type number", function() {
        var days = date.daysOf("calendarMonth");

        days.forEach(function(day) {
          expect(day).to.be.a("number").above(0);
        });

        expect(days).to.be.of.length.within(35, 42);
      });
    });

    describe("aliases", function() {
      it("should be defined", function() {
        expect(date.daysOf("w")).to.be.defined;
        expect(date.daysOf("m")).to.be.defined;
        expect(date.daysOf("cm")).to.be.defined;
      });
    });

  });
};