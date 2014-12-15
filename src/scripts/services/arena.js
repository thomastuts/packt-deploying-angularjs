'use strict';

angular.module('packt')
  .service('Arena', function (Animals, Terrains) {

    var Arena = this;

    Arena.generateMatchup = function () {
      var opponent = Animals.getRandomAnimal();
      var terrain = Terrains.getRandomTerrain();

      return {
        opponent: opponent,
        terrain: terrain
      }
    };

  });
