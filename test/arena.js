'use strict';

describe('Arena', function () {

  beforeEach(function () {
    module('packt');
  });

  describe('Matchup generation', function () {
    it('should generate a matchup with an opponent and a terrain', inject(function (Arena) {
      var matchup = Arena.generateMatchup();
      matchup.opponent.should.exist();
      matchup.terrain.should.exist();
    }));
  });

});
