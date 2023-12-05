import { create } from "zustand";

type State = {
    token : string
    setToken : (token : string) => void
}

const useAuthStore = create<State>((set) => ({
    token: '',
    setToken : (token) => set({token})
}))

export default useAuthStore