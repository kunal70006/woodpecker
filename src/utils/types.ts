export type Product = {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  id: string;
  out_of_stock: boolean;
  created_at: Date;
  updated_at: Date;
};

export type Category = {
  id: string;
  name: string;
  created_by: string;
  created_at: Date;
};
