/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { StateCreator } from 'zustand';
import { StoreType } from '@/types/store';
import { CartSliceType } from '@/types/store/cart';

const cartSliceType: StateCreator<
  StoreType,
  [],
  [],
  CartSliceType
> = (set) => ({
  cart: null,
  setCart: (arg?: any, ctx?: { req: any; res: any }) => {
    set(() => ({ cart: arg }));
  },
});

export default cartSliceType;
