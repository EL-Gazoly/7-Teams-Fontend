import {create} from 'zustand';


type ThemeStoreState = {
    dark: boolean ;
    setTheme: (dark: boolean) => void;

}

export const useThemeStore = create<ThemeStoreState>((set) => ({
    dark: false,
    setTheme: (dark) => {
        set({dark})
        window.document.documentElement.classList.toggle('dark', dark)
    }
}))

