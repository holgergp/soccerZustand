import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { positionSlice } from './positionsSlice';

export const useStore = create(devtools((set) => ({ ...positionSlice(set) })));
