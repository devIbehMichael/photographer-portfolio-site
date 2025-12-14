import { NavItem, Photo, Service, Series } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', href: '#gallery' },
  { label: 'Series', href: '#featured-series' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_IMAGES: Photo[] = [
  { id: 1, url: 'https://picsum.photos/800/1200?random=1', title: 'Ethereal Silence', category: 'Portrait', aspect: 'portrait' },
  { id: 2, url: 'https://picsum.photos/1200/800?random=2', title: 'Urban Solitude', category: 'Street', aspect: 'landscape' },
  { id: 3, url: 'https://picsum.photos/800/1000?random=3', title: 'Modernist Curves', category: 'Architecture', aspect: 'portrait' },
  { id: 4, url: 'https://picsum.photos/1000/1000?random=4', title: 'Raw Emotion', category: 'Editorial', aspect: 'square' },
  { id: 5, url: 'https://picsum.photos/800/1200?random=5', title: 'Midnight Rain', category: 'Street', aspect: 'portrait' },
  { id: 6, url: 'https://picsum.photos/1200/800?random=6', title: 'The Void', category: 'Landscape', aspect: 'landscape' },
  { id: 7, url: 'https://picsum.photos/800/1200?random=7', title: 'Vintage Soul', category: 'Portrait', aspect: 'portrait' },
  { id: 8, url: 'https://picsum.photos/1000/600?random=8', title: 'Glass & Steel', category: 'Architecture', aspect: 'landscape' },
  { id: 9, url: 'https://picsum.photos/800/800?random=9', title: 'Abstract Light', category: 'Fine Art', aspect: 'square' },
];

export const SERVICES: Service[] = [
  {
    title: 'Editorial & Fashion',
    description: 'High-end editorial photography for magazines, brands, and designers looking for a unique visual voice.',
    priceStart: '$2,500'
  },
  {
    title: 'Campaign Direction',
    description: 'Full-service visual direction for advertising campaigns, from concept to final retouching.',
    priceStart: '$5,000'
  },
  {
    title: 'Portraiture',
    description: 'Intimate and cinematic portraits that capture the essence of the subject in natural or studio light.',
    priceStart: '$800'
  }
];

export const FEATURED_SERIES: Series[] = [
  {
    id: 101,
    title: 'Neon Drift',
    description: 'A study of light and loneliness in the nocturnal streets of Tokyo.',
    year: '2023',
    coverUrl: 'https://picsum.photos/1600/900?random=101',
    images: [
      { id: 1011, url: 'https://picsum.photos/800/1200?random=1011', title: 'Shinjuku Rain', category: 'Street', aspect: 'portrait' },
      { id: 1012, url: 'https://picsum.photos/1200/800?random=1012', title: 'Alleyway 7', category: 'Street', aspect: 'landscape' },
      { id: 1013, url: 'https://picsum.photos/800/800?random=1013', title: 'Neon Reflection', category: 'Street', aspect: 'square' },
      { id: 1014, url: 'https://picsum.photos/800/1200?random=1014', title: 'Taxi Glare', category: 'Street', aspect: 'portrait' },
    ]
  },
  {
    id: 102,
    title: 'Nordic Silence',
    description: 'Minimalist landscapes exploring the harsh beauty of Iceland.',
    year: '2024',
    coverUrl: 'https://picsum.photos/1600/900?random=102',
    images: [
      { id: 1021, url: 'https://picsum.photos/1200/800?random=1021', title: 'Black Sand', category: 'Landscape', aspect: 'landscape' },
      { id: 1022, url: 'https://picsum.photos/800/1200?random=1022', title: 'Glacial Blue', category: 'Landscape', aspect: 'portrait' },
      { id: 1023, url: 'https://picsum.photos/1200/600?random=1023', title: 'Horizon Line', category: 'Landscape', aspect: 'landscape' },
    ]
  },
  {
    id: 103,
    title: 'Shadow Play',
    description: 'Experimental studio work focusing on form, shadow, and the human silhouette.',
    year: '2022',
    coverUrl: 'https://picsum.photos/1600/900?random=103',
    images: [
      { id: 1031, url: 'https://picsum.photos/800/1200?random=1031', title: 'Profile I', category: 'Studio', aspect: 'portrait' },
      { id: 1032, url: 'https://picsum.photos/800/1200?random=1032', title: 'Hands', category: 'Studio', aspect: 'portrait' },
      { id: 1033, url: 'https://picsum.photos/800/800?random=1033', title: 'Contrast', category: 'Studio', aspect: 'square' },
    ]
  }
];