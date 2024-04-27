import { create } from "zustand";

// Estado global para nuestro perfil
export interface ProfileState {
    name:string;
    email:string;
}

export const useProfileStore = create<ProfileState>()( (set, get) => ({
    name: 'Jhon Doe',
    email: 'jhon.doe@test.com'
}));