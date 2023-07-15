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

export default function SaleCard({image, discount, fullPrice, discountPrice}) {
    return (
        <div className={styles.saleCard}>
            <Image src={`/products/${image}`} alt={`Produto ${image}`} width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.price}>
                        <p className={styles.fullPrice}>R${fullPrice}</p>
                        <h4 className={styles.discountPrice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button fullWidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

/*
    Se os valores não forem passados quando a tag é chamada, esses serão os valores defaults.
*/
SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: '90%',
    fullPrice: '199,90',
    discountPrice: '57,90'
}