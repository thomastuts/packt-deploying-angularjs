'use strict';

angular
  .module('packt', [
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('packt');
  });
