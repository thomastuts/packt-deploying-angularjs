'use strict';

angular.module('packt')
  .service('Animals', function (ANIMALS_COLLECTION) {

    var Animals = this;

    Animals.findAll = function () {
      return ANIMALS_COLLECTION;
    };

    Animals.find = function (id) {
      for (var i = 0; i < ANIMALS_COLLECTION.length; i++) {
        var animal = ANIMALS_COLLECTION[i];
        if (animal.id === id) {
          return animal;
        }
      }

      return undefined;
    };

    Animals.getRandomAnimal = function () {
      return ANIMALS_COLLECTION[Math.floor(Math.random() * ANIMALS_COLLECTION.length)];
    };

  });
