import styles from './cartMenu.module.css'
import CartOption from '@/components/cartOption/cartOption'

export default function CartMenu() {
    return (
        <div className={styles.menu}>
            <div className={styles.options}>
                <CartOption/>
                <CartOption/>
                <CartOption/>
            </div>
            <div className={styles.priceLine}>
                <h2>Total</h2>
                <h2 className={styles.price}> R$999,99</h2>
            </div>
        </div>
    )
}