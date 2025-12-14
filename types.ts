export interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
  aspect: 'portrait' | 'landscape' | 'square';
}

export interface Service {
  title: string;
  description: string;
  priceStart: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Series {
  id: number;
  title: string;
  description: string;
  coverUrl: string;
  year: string;
  images: Photo[];
}