// ------------------ 1. Базовые примитивы ------------------
export type UUID = string;           // UUID v4
export type ISODate = string;        // 2024-12-31T23:59:59.999Z
export type Currency = 'USD' | 'EUR' | 'RUB';


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
  createdAt: ISODate;
  updatedAt: ISODate;
}

// ------------------ 5. Пример использования ------------------
const Item: BaseItem = {
  id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
  name: 'Wieldberry Premium',
  category: 'beauty',
  description: 'Hand-picked wild berries from Altai mountains',
  price: { amount: 299.99, currency: 'RUB' },
  images: [
    { url: 'https://cdn.site.com/wb/premium.jpg', alt: 'Juicy dark-blue wieldberry' }
  ],
  weightKg: 0.5,
  inStock: true,
  createdAt: '2024-07-19T10:00:00.000Z',
  updatedAt: '2024-07-19T10:00:00.000Z',
};