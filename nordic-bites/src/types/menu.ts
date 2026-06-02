export type MenuItem = {
  name: string;
  price: string;
};

export type MenuCategory = {
  category: string;
  description: string;

  items: MenuItem[];
};
