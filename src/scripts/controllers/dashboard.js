'use strict';

angular.module('packt')
  .controller('DashboardCtrl', function (Arena, Animals, Terrains) {

    var vm = this;
    vm.animals = Animals;

    vm.playedMatches = Arena.getPlayedMatches().map(function (match) {
      return {
        player: Animals.find(match.player),
        opponent: Animals.find(match.opponent),
        terrain: Terrains.find(match.terrain),
        winner: match.winner
      };
    });

    vm.favoriteAnimals = Arena.getFavoriteAnimals();

  });
