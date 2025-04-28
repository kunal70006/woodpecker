export type Product = {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  id: number;
  out_of_stock: boolean;
  created_at: string;
  updated_at: string;
};

export type Category = {
  id: number;
  name: string;
  created_by: string;
  created_at: string;
};
