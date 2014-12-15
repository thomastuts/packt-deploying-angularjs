'use strict';

describe('Terrains', function () {

  beforeEach(function () {
    module('packt');
  });

  describe('Finding all terrains', function () {
    it('should return all terrains in the collection', inject(function (Terrains) {
      Terrains.findAll().length.should.be.above(0);
    }));
  });

  describe('Finding a specific terrain', function () {
    it('should return a single terrain in the collection when given a parameter', inject(function (Terrains) {
      var terrain = Terrains.find('swamp');
      terrain.should.exist();
    }));

    it('should return undefined if no terrain is found', inject(function (Terrains) {
      var terrain = Terrains.find('i_dont_exist');
      should.not.exist(terrain);
    }));
  });

});
