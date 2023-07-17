import styles from './navbar.module.css'
import {BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'
import Input from '@/components/forms/input/input'
import CartButton from '@/components/forms/cartButton/cartButton'

/*
    Componente é uma função js;
    Cada componente tem seu próprio arquivo.module.css;
    Nome da função precisa começar com letra maiúscula;
    Precisa ser exportado;
    Precisa ceder um retorno HTML;
*/
export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Logo />
            <div className={styles.search}>
                <Input type="text" placeholder="Buscar" fullWidth/>
            </div>
            <CartButton />
        </nav>
    )
}