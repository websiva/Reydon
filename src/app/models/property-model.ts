export interface property{
  id: number;
  title: string;
  description: string;
  image: string;
  size?: string; // size of the property (e.g., in square feet or square meters)
  address?: string; // full address of the property
  amenities?: string[]; // list of amenities (e.g., pool, gym)
  features?: string[]; // list of features (e.g., sea view, garden)
  mapUrl?: string; // URL to the map location
  }