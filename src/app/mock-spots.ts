import { Spot } from './spot';

export const SPOTS: Spot[] = [
  { id: 1,
    name: 'Snack Indien',
    category: 'Restaurant',
    season: 'N/A',
    location: {street: 'Rue Belanger', city: 'Montreal', postalcode: 'H2E', country: "Canada"},
    visited: false
  },
  { id: 2,
    name: 'Montagne Bromont',
    category: 'Ski',
    season: 'hiver',
    location: {street: 'Rue Belanger', city: 'Bromont', postalcode: 'H2E', country: "Canada"},
    visited: false
  },
  { id: 3,
    name: 'Quebec City',
    category: 'Ville',
    season: 'N/A',
    location: {city: 'Quebec City', country: "Canada"},
    visited: true,
    rating: 4
  },
  { id: 4,
    name: 'Spectacle lumiere notre Dame',
    category: 'Spectacle',
    season: 'N/A',
    location: {city: 'Montreal', postalcode: 'H2E', country: "Canada"},
    visited: false
  },
  { id: 5,
    name: 'Parc Mont-Tremblant',
    category: 'Parc National',
    season: 'ete',
    location: {city: 'Mont-Tremblant', country: "Canada"},
    visited: true,
    rating: 5,
    comment: 'Best place ever ! kjsdnkjdbshdkbdskahbdj,sdzxnjcnsdbbsdkbkdhbdsksdbkbs'
  }
];
