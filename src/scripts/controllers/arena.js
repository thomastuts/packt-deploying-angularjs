'use strict';

angular.module('packt')
  .controller('ArenaCtrl', function (Arena, $timeout) {

    var vm = this;

    $timeout(function () {
      vm.matchup = Arena.generateMatchup();
    }, 2000);

  });
