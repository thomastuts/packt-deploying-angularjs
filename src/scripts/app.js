'use strict';

angular
  .module('packt', [
    'LocalStorageModule',
    'ui.router'
  ])
  .config(function (localStorageServiceProvider, $stateProvider, $urlRouterProvider, foo) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('arena', {
        url: '/arena',
        templateUrl: 'scripts/partials/arena.html',
        controllerAs: 'arena',
        controller: 'ArenaCtrl'
      })
      .state('dashboard', {
        url: '/',
        templateUrl: 'scripts/partials/dashboard.html',
        controllerAs: 'dashboard',
        controller: 'DashboardCtrl'
      });

    localStorageServiceProvider.setPrefix('packt');
  });

angular.module('exceptionOverride', []).factory('$exceptionHandler', function () {
  return function (exception, cause) {
    Bugsnag.notifyException(exception, {diagnostics:{cause: cause}})
  };
});
