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

  describe('Scoring', function () {

    beforeEach(inject(function (Animals, Terrains) {
      this.rhino = Animals.find('rhino');
      this.alligator = Animals.find('alligator');
      this.swamp = Terrains.find('swamp');
    }))

    it('should calculate the combat score for an animal', inject(function (Arena) {
      var combatScore = Arena.calculateCombatScore(this.rhino);
      combatScore.should.be.gte(0).and.lte(10);
    }));

    it('should calculate the terrain influence of a terrain and an animal', inject(function (Arena) {
      var terrainInfluence = Arena.calculateTerrainInfluence(this.rhino, this.swamp);
      terrainInfluence.should.be.gte(0).and.lte(1);
    }));

    it('should calculate the final score for an animal based on its stats and the terrain', inject(function (Arena) {
      var totalScore = Arena.calculateTotalScore(this.rhino, this.swamp);
      totalScore.should.be.gte(0).and.lte(10);
    }));

  });

});
