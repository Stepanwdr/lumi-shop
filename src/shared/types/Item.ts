// ------------------ 1. Базовые примитивы ------------------
export type UUID = string;           // UUID v4
export type ISODate = string;        // 2024-12-31T23:59:59.999Z
export type Currency = 'USD' | 'EUR' | '֏';


// 1. Верхнеуровневые категории Wildberries
export type CATEGORIES =
  'women'|
  'men'|
  'kids'|
  'shoes'|
  'home'|
  'beauty'|
  'electronics'|
  'sport' |
  'pets'|
  'health'|
  'handmade'


// ------------------ 2. Общие сущности (могут быть у любого товара) ------------------
export interface Price {
  amount: number;      // 149.99
  currency: Currency;
}

export interface Image {
  url: string;         // https://cdn.site.com/wb/1.jpg
  alt?: string;
}

export interface BaseItem {
  id: UUID;
  name: string;
  description: string;
  price: Price;
  images: Image[];
  weightKg: number;    // 0.25
  inStock: boolean;
  category:  CATEGORIES;
  rating: number;
  discounted?: number;
  createdAt: ISODate;
  updatedAt: ISODate;
}
