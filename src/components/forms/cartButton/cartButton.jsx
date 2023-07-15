import {useState} from 'react'
import styles from './cartButton.module.css'
import {BsCart4} from 'react-icons/bs'
import CartMenu from '@/components/cartMenu/cartMenu'

/*
    Estado (state): Armazena informações que o componente precisa para realizar ou deixar de realizar alguma ação dentro do código;
    Cada componente tem seu próprio estado;
    O estado não pode ser modificado fora do componente, apenas dentro dele.
*/

export default function CartButton() {
    const [open, setOpen] = useState(false) /*Destructor de array */

    return (
        <div>
            <BsCart4 
                className={styles.icon} 
                size={40} 
                onClick={() => {setOpen(!open)}}
            />
            {/* Se o open = true, mostra o CartMenu */}
            {open && <CartMenu/>} 
        </div>
    )
}