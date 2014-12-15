'use strict';

angular.module('packt')
  .service('Arena', function (Animals, Terrains) {

    var Arena = this;

    var weights = {
      ferocity: 1,
      tenacity: 0.8
    };

    Arena.generateMatchup = function () {
      var opponent = Animals.getRandomAnimal();
      var terrain = Terrains.getRandomTerrain();

      return {
        opponent: opponent,
        terrain: terrain
      }
    };

    Arena.calculateCombatScore = function (animal) {
      return ((animal.stats.ferocity * weights.ferocity) + (animal.stats.tenacity * weights.tenacity)) / 2;
    };

    Arena.calculateTerrainInfluence = function (animal, terrain) {
      var landInfluence = animal.stats.land / terrain.stats.land;
      var waterInfluence = animal.stats.water / terrain.stats.water;
      return (landInfluence + waterInfluence) / 20;
    };

    Arena.calculateTotalScore = function (animal, terrain) {
      var combatScore = Arena.calculateCombatScore(animal);
      var terrainScore = Arena.calculateTerrainInfluence(animal, terrain);
      return combatScore * terrainScore;
    };

  });
