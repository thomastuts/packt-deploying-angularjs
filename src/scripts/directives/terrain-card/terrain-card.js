'use strict';

angular.module('packt')
  .directive('terrainCard', function () {

    return {
      restrict: 'EA',
      scope: {
        terrain: '=terrainCard'
      },
      templateUrl: 'scripts/directives/terrain-card/terrain-card.html'
    };

  });
