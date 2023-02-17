export interface Items {
  item: string;
  description: string;
  price: string;
}

export interface Restaurants {
  name: string;
  items: Array<Items>;
}

export interface Restaurants2 {
  name: string;
  phoneNumber?: string;
  categoriesWithItems: Array<MenuCategory>;
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}

// Define the interface for a MenuCategory
export interface MenuCategory {
  name: string;
  items: MenuItem[];
}
