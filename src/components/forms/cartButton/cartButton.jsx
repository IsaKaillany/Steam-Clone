import {useState} from 'react'
import { useRecoilValue } from 'recoil'

import { cartState } from '@/atoms/cart'

import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'

import CartMenu from '@/components/cartMenu/cartMenu'

/*
    Estado (state): Armazena informações que o componente precisa para realizar ou deixar de realizar alguma ação dentro do código;
    Cada componente tem seu próprio estado;
    O estado não pode ser modificado fora do componente, apenas dentro dele.
*/

export default function CartButton() {
    const cart = useRecoilValue(cartState)
    const [open, setOpen] = useState(false) /*Destructor de array */

    return (
        <div className={styles.cartButton} onClick={() => {setOpen(!open)}}>
            <BsCart4 size={40} />     
           
            <div className={styles.quantity}>{cart.length}</div>
            {/* Se o open = true, mostra o CartMenu */}
            {open && <CartMenu />} 
        </div>
    )
}