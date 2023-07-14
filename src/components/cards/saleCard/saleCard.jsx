import Image from 'next/image'
import styles from './saleCard.module.css'
import Button from '@/components/forms/button/button'

/*
    O react só aceita um tipo de retorno, então só é possível haver uma tag mãe com seus filhos dentro;
    Utiliza-se o 'react fragment = <> </>' para ser possível retornar mais de uma tag mãe.
*/

/*
    A tag Image faz o processamento para mostrar ao usuário somente a imagem do tamanho que ele precisa.
*/

export default function SaleCard() {
    return (
        <div className={styles.saleCard}>
            <Image src='/products/league-of-legends.jpg' width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R$99,90</p>
                        <h4 className={styles.discountPrice}>R$89,90</h4>
                    </div>
                </div>
                <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}