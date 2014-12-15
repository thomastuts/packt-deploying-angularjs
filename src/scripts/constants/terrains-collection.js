'use strict';

angular.module('packt')
  .constant('TERRAINS_COLLECTION', [
    {
      name: 'Okavango Swamp',
      location: 'Botswana',
      id: 'swamp',
      stats: {
        land: 4,
        water: 8
      }
    },
    {
      name: 'Namib Desert',
      location: 'Namibia & Angola',
      id: 'desert',
      stats: {
        land: 10,
        water: 0
      }
    },
    {
      name: 'Amazon Jungle',
      location: 'South America',
      id: 'jungle',
      stats: {
        land: 8,
        water: 5
      }
    },
    {
      name: 'Jiuzhaigou Valley',
      location: 'China',
      id: 'forest',
      stats: {
        land: 9,
        water: 4
      }
    }
  ]);
