import { create } from "zustand";

// Estado global para nuestro perfil
export interface ProfileState {
    name:string;
    email:string;

    changeProfile: (name:string, email:string) => void;
}

export const useProfileStore = create<ProfileState>()( (set, get) => ({
    name: 'Jhon Doe',
    email: 'jhon.doe@test.com',

    changeProfile: (name:string, email:string) => {
        console.log(get());
        set({ name, email});
    }
}));