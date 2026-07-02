export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'main' | 'pastry' | 'beverage';
  badge?: string;
  image: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  area: 'terrace' | 'indoor' | 'any';
  notes?: string;
  isPetFriendly?: boolean;
  createdAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date: string;
  image?: string;
}
