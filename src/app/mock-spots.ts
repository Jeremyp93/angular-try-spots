import { Spot } from './spot';

export const SPOTS: Spot[] = [
  { id: 1,
    name: 'Snack Indien',
    category: 'Restaurant',
    season: 'N/A',
    location: {street: 'Rue Belanger', city: 'Montreal', postalcode: 'H2E', country: "Canada"},
    visited: false,
    rating: -1
  },
  { id: 2,
    name: 'Montagne Bromont',
    image: '2.jpg',
    category: 'Ski',
    season: 'winter',
    location: {city: 'Bromont', postalcode: 'H2E', country: "Canada"},
    visited: false,
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    rating: -1
  },
  { id: 3,
    name: 'Quebec City',
    image: '3.jpg',
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
    visited: false,
    rating: -1
  },
  { id: 5,
    name: 'Parc Mont-Tremblant',
    category: 'Parc National',
    season: 'summer',
    location: {city: 'Mont-Tremblant', country: "Canada"},
    visited: true,
    rating: 5,
    comment: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  }
];
