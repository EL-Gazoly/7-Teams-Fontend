import { create } from "zustand";

type UserLibraryStoreState = {
    stduentName: string;
    studentImage: string;
    setStudentName: (name: string) => void;
    setStudentImage: (image: string) => void;
};

export const useUserLibraryStore = create<UserLibraryStoreState>((set) => ({
    stduentName: "",
    studentImage: "",
    setStudentName: (name) => {
        set({ stduentName: name });
    },
    setStudentImage: (image) => {
        set({ studentImage: image });
    },
}));