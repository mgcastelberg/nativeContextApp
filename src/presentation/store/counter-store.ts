import { create } from "zustand";

export interface CounterState {
    counter: number,
    incrementBy:( value: number) => void;
}

export const useCounterStore = create<CounterState>()( (set, get) => ({
    counter: 1,
    incrementBy: (value:number) => {
        console.log(get());
        set({ counter: get().counter + value });
    }
}));