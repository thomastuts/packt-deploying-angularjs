'use strict';

angular.module('packt')
  .constant('ANIMALS_COLLECTION', [
    {
      name: 'Silverback Gorilla',
      scientific: 'Gorilla Beringei',
      id: 'silverback_gorilla',
      stats: {
        ferocity: 7,
        tenacity: 9,
        land: 7,
        water: 2
      }
    },
    {
      name: 'Leopard',
      scientific: 'Panthera pardus',
      id: 'leopard',
      stats: {
        ferocity: 9,
        tenacity: 5,
        land: 9,
        water: 2
      }
    },
    {
      name: 'Anaconda',
      scientific: 'Eunectes murinus',
      id: 'anaconda',
      stats: {
        ferocity: 8,
        tenacity: 7,
        land: 6,
        water: 7
      }
    },
    {
      name: 'Rhino',
      scientific: 'Rhinocerotidae',
      id: 'rhino',
      stats: {
        ferocity: 8,
        tenacity: 10,
        land: 9,
        water: 2
      }
    },
    {
      name: 'Alligator',
      scientific: 'Alligator mississippiensis',
      id: 'alligator',
      stats: {
        ferocity: 7,
        tenacity: 7,
        land: 6,
        water: 8
      }
    }
  ]);
