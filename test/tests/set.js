'use strict';

module.exports = function(expect, test, NiceDate) {
  var initial = '2000-01-01 10:00';

  describe('NiceDate.prototype.set', function() {

    describe('invalid format', function() {
      var fn = function() { date.set('something') };
      test.throwError(fn, ReferenceError);
    });

    describe('set.date', function() {
      var date = new NiceDate(initial);
      var updated = date.set('date', '2001-01-01');

      it('should update date correctly & leave time intact', function() {
        expect(updated.get('date')).to.equal('2001-01-01');
        expect(updated.get('time')).to.equal('10:00');
      });
    });

    describe('set.time', function() {
      var date = new NiceDate(initial);
      var updated = date.set('time', 20, 0);

      it('should update time correctly & leave date intact', function() {
        expect(updated.get('date')).to.equal('2000-01-01');
        expect(updated.get('time')).to.equal('20:00');
      });
    });

  });

};