import Image from 'next/image'
import styles from './gameCard.module.css'
import Button from '@/components/forms/button/button'

export default function GameCard() {
    return (
        <div className={styles.gameCard}>
            <Image src='/products/counter-strike.jpg' width={300} height={145} />
            <div className={styles.info}>
                <h3 className={styles.title}>Counter strike: Global offensive</h3>
                <p className={styles.category}>Ação, estratégia, multijogador.</p>
                <div className={styles.pricing}>
                    <h2 className={styles.price}>R$99,90</h2>
                    <Button>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    )
}