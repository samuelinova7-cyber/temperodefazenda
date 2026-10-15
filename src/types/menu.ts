export type PortionOption = {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description?: string;
  categoryId: string;
  price?: number; // base price if single price
  portions?: PortionOption[]; // if multiple portions (e.g., Individual / Para 2 / Para 4)
  options?: {
    title: string;
    choices: { name: string; extraPrice?: number }[];
    type: 'single' | 'multiple';
  }[];
  popular?: boolean;
  serves?: string; // e.g. "1 pessoa", "2 a 3 pessoas"
  badge?: string; // e.g. "Vegetariano", "Carro-chefe", "Especialidade"
  image?: string;
};

export type Category = {
  id: string;
  name: string;
  shortName: string;
  iconName: string;
  description: string;
  itemCount?: number;
};

export type CartItem = {
  cartItemId: string;
  item: MenuItem;
  selectedPortion?: PortionOption;
  selectedOptions?: Record<string, string | string[]>;
  notes?: string;
  unitPrice: number;
  quantity: number;
};

export type OrderType = 'mesa' | 'delivery' | 'retirada';

export type RestaurantDetails = {
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  address: string;
  city: string;
  state: string;
  cep: string;
  cuisine: string;
  instagram: {
    handle: string;
    followers: string;
    posts: number;
  };
  amenities: {
    icon: string;
    title: string;
    desc: string;
  }[];
  hours: {
    general: string;
    weekend: string;
  };
  phoneWhatsApp: string;
};
