import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "../../utils/types";

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Espresso",
    description: "Rich and bold single shot of espresso",
    price: 3.5,
    image: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13",
    category: "Coffee",
    outOfStock: false,
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15"),
  },
  {
    id: "2",
    title: "Cappuccino",
    description: "Classic cappuccino with steamed milk and foam",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d",
    category: "Coffee",
    outOfStock: false,
    createdAt: new Date("2024-02-01"),
    updatedAt: new Date("2024-02-01"),
  },
  {
    id: "3",
    title: "Croissant",
    description: "Freshly baked buttery croissant",
    price: 3.25,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
    category: "Pastry",
    outOfStock: false,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "4",
    title: "Blueberry Muffin",
    description: "Moist muffin packed with fresh blueberries",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75",
    category: "Pastry",
    outOfStock: true,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "5",
    title: "Iced Latte",
    description: "Chilled espresso with milk over ice",
    price: 4.75,
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86",
    category: "Coffee",
    outOfStock: false,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-10"),
  },
  {
    id: "6",
    title: "Avocado Toast",
    description: "Sourdough toast with smashed avocado and cherry tomatoes",
    price: 8.5,
    image: "https://images.unsplash.com/photo-1582137375727-3a9bdd0a2a0a",
    category: "Food",
    outOfStock: false,
    createdAt: new Date("2024-01-20"),
    updatedAt: new Date("2024-02-10"),
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  if (req.method === "GET") {
    res.status(200).json(mockProducts);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
