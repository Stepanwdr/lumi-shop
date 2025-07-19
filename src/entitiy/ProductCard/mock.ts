import {BaseItem} from "@/shared/types/Item";

export const mockItems: BaseItem[] = [
  {
    id: 'a0f7d1e2-3b8a-4f5c-9e12-3456789abcde',
    name: 'Женский свитшот "Soft Cloud"',
    category: 'women',
    description: 'Уютный свитшот из органического хлопка с минималистичным дизайном.',
    price: { amount: 3490, currency: 'RUB' },
    images: [
      { url: './stories/story_1.png', alt: 'Женский свитшот' },
      { url: 'https://cdn.site.com/wb/premium.jpg', alt: 'Деталь свитшота' }
    ],
    weightKg: 0.5,
    inStock: true,
    createdAt: '2024-07-01T09:00:00.000Z',
    updatedAt: '2024-07-19T15:30:00.000Z'
  },

  {
    id: 'b1a8c3f4-2c7d-4e6b-8f01-234567890abc',
    name: 'Кроссовки мужские "Urban Runner"',
    category: 'shoes',
    description: 'Лёгкие кроссовки для бега и повседневной носки. Дышащий верх и амортизация.',
    price: { amount: 5990, currency: 'RUB' },
    images: [
      { url: './stories/story_2.png', alt: 'Кроссовки Urban Runner' }
    ],
    weightKg: 0.8,
    inStock: true,
    createdAt: '2024-07-05T11:20:00.000Z',
    updatedAt: '2024-07-19T13:45:00.000Z'
  },

  {
    id: 'c2d9e5a6-1b4f-4c8a-9b12-3456789abcdf',
    name: 'Набор детских фломастеров "Rainbow"',
    category: 'kids',
    description: '24 ярких цвета, водорастворимые, безопасные для детей от 3 лет.',
    price: { amount: 490, currency: 'RUB' },
    images: [
      { url: './stories/story_3.png', alt: 'Фломастеры Rainbow' }
    ],
    weightKg: 0.15,
    inStock: false,
    createdAt: '2024-06-25T08:10:00.000Z',
    updatedAt: '2024-07-18T20:00:00.000Z'
  },

  {
    id: 'd3e0f7b8-5a9c-4d7e-8c23-456789abcdef',
    name: 'Эфирное масло лаванды',
    category: 'beauty',
    description: '100% натуральное эфирное масло для ароматерапии и ухода за кожей.',
    price: { amount: 790, currency: 'RUB' },
    images: [
      { url: './stories/story_4.png', alt: 'Флакон эфирного масла' }
    ],
    weightKg: 0.05,
    inStock: true,
    createdAt: '2024-07-10T14:00:00.000Z',
    updatedAt: '2024-07-19T10:15:00.000Z'
  },

  {
    id: 'e4f1a8c9-6b0d-4e8f-9d34-567890abcdef',
    name: 'Беспроводные наушники "SoundWave"',
    category: 'electronics',
    description: 'TWS-наушники с активным шумоподавлением и 30 часами автономной работы.',
    price: { amount: 4990, currency: 'RUB' },
    images: [
      { url: './stories/story_5.png', alt: 'Наушники SoundWave' }
    ],
    weightKg: 0.12,
    inStock: true,
    createdAt: '2024-07-15T16:30:00.000Z',
    updatedAt: '2024-07-19T09:00:00.000Z'
  },

  {
    id: 'f5a2b9d0-7c1e-4f9a-8e45-67890abcdef0',
    name: 'Йога-мат "EcoFlex"',
    category: 'sport',
    description: 'Профессиональный коврик для йоги из TPE-материала, 6 мм толщиной.',
    price: { amount: 2190, currency: 'RUB' },
    images: [
      { url: './stories/story_6.png', alt: 'Йога-мат' }
    ],
    weightKg: 1.0,
    inStock: true,
    createdAt: '2024-07-12T12:00:00.000Z',
    updatedAt: '2024-07-19T11:45:00.000Z'
  },

  {
    id: 'a6b3c0d1-8e2f-4a9b-9f56-7890abcdef01',
    name: 'Органическая варенье из черники',
    category: 'handmade',
    description: 'Ручная работа, без сахара, 250 гр. Приготовлено в Алтайском крае.',
    price: { amount: 390, currency: 'RUB' },
    images: [
      { url: './stories/story_1.png', alt: 'Банка варенья' }
    ],
    weightKg: 0.25,
    inStock: true,
    createdAt: '2024-07-08T07:30:00.000Z',
    updatedAt: '2024-07-19T14:20:00.000Z'
  }
];