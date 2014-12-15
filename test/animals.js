'use strict';

describe('Animals', function () {

  beforeEach(function () {
    module('packt');
  });

  describe('Finding all animals', function () {
    it('should return all animals in the collection', inject(function (Animals) {
      Animals.findAll().length.should.be.above(0);
    }));
  });

  describe('Finding a specific animal', function () {
    it('should return a single animal in the collection when given a parameter', inject(function (Animals) {
      var animal = Animals.find('silverback_gorilla');
      animal.should.exist();
    }));

    it('should return undefined if no animal is found', inject(function (Animals) {
      var animal = Animals.find('i_dont_exist');
      should.not.exist(animal);
    }));
  });

});
