'use strict';

angular.module('packt')
  .service('Arena', function (Animals, Terrains, Storage) {

    var Arena = this;

    var playedMatches = Storage.load('matches') || [];
    var favoriteAnimals = Storage.load('favorites') || {};

    var weights = {
      ferocity: 1,
      tenacity: 0.8
    };

    Arena.getPlayedMatches = function () {
      return playedMatches;
    };

    Arena.getFavoriteAnimals = function () {
      return favoriteAnimals;
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
      var landInfluence = animal.stats.land * (terrain.stats.land / 10);
      var waterInfluence = animal.stats.water * (terrain.stats.water / 10);
      return (landInfluence + waterInfluence) / 20;
    };

    Arena.calculateTotalScore = function (animal, terrain) {
      var combatScore = Arena.calculateCombatScore(animal);
      var terrainScore = Arena.calculateTerrainInfluence(animal, terrain);
      return combatScore * terrainScore;
    };

    Arena.determineWinner = function (playerAnimal, opponentAnimal, terrain) {
      var playerScore = Arena.calculateTotalScore(playerAnimal, terrain);
      var opponentScore = Arena.calculateTotalScore(opponentAnimal, terrain);
      var outcome;

      if (playerScore === opponentScore) {
        outcome = 'draw';
      }
      else {
        outcome = playerScore > opponentScore ? 'player' : 'opponent';
      }

      playedMatches.push({
        player: playerAnimal.id,
        opponent: opponentAnimal.id,
        terrain: terrain.id,
        winner: outcome
      });

      if (!favoriteAnimals[playerAnimal.id]) {
        favoriteAnimals[playerAnimal.id] = 1;
      }
      else {
        favoriteAnimals[playerAnimal.id]++;
      }

      Storage.save('matches', playedMatches);
      Storage.save('favorites', favoriteAnimals);

      return outcome;
    }

  });
