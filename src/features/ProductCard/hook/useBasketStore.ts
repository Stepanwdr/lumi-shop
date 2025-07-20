import { create } from 'zustand';
import { BaseItem } from "@/shared/types/Item";

type BasketItem = {
  quantity: number;
} & BaseItem;

interface BasketState {
  items: BasketItem[];
  addItem: (item: Omit<BasketItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearBasket: () => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  totalCount: () => number;
  totalPrice: () => number;
}

export const useBasketStore = create<BasketState>((set, get) => ({
  items: [],

  addItem: (item) => {
    const existingItem = get().items.find((i) => i.id === item.id);
    if (existingItem) {
      set({
        items: get().items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        ),
      });
    } else {
      set({
        items: [...get().items, { ...item, quantity: 1 }],
      });
    }
  },

  removeItem: (id) => {
    set({
      items: get().items.filter((i) => i.id !== id),
    });
  },

  clearBasket: () => set({ items: [] }),

  increment: (id) => {
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    });
  },

  decrement: (id) => {
    set({
      items: get().items
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
    });
  },

  totalCount: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce(
      (total, item) => total + item.price.amount * item.quantity,
      0
    ),
}));
