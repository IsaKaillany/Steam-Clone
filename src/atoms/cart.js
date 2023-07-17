import { atom } from "recoil"

export const cartState = atom({
    /*Chave única */
    key: 'cartState',
    default: []
})