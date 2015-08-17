'use strict';

module.exports = function(expect, test, NiceDate) {
  describe('NiceDate.prototype.next', function() {

    describe('invalid measure', function() {
      var fn = function() { date.next('something') };
      test.throwError(fn, ReferenceError);
    });

    describe('next.whole', function() {
      var date = new NiceDate('2000-01-01 09:44');

      it('should update to the next whole hour correctly', function() {
        expect(date.next('whole').get('time')).to.equal('10:00');
      });
    });

    describe('next.half', function() {
      var date1 = new NiceDate('2000-01-01 09:11');
      var date2 = new NiceDate('2000-01-01 09:30');

      it('should update to the next half hour correctly', function() {
        expect(date1.next('half').get('time')).to.equal('09:30');
        expect(date2.next('half').get('time')).to.equal('10:00');
      });
    });

    describe('next.quarter', function() {
      var date1 = new NiceDate('2000-01-01 09:00');
      var date2 = new NiceDate('2000-01-01 09:18');
      var date3 = new NiceDate('2000-01-01 09:38');
      var date4 = new NiceDate('2000-01-01 09:59');

      it('should update to the next quarter correctly', function() {
        expect(date1.next('quarter').get('time')).to.equal('09:15');
        expect(date2.next('quarter').get('time')).to.equal('09:30');
        expect(date3.next('quarter').get('time')).to.equal('09:45');
        expect(date4.next('quarter').get('time')).to.equal('10:00');
      });
    });

  });

};