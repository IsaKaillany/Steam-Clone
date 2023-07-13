import styles from './subtitle.module.css'
/*
    Todo componente react vai ter o parâmetro 'props' = propriedades, mas pode não ser utilizado, deixando em branco;
    Invés de props, é mais usado um destructor como parâmetro, o qual transforma a chave a ser usada em variável.
*/

export default function Subtitle({children}) {
    return (
        <h2 className={styles.subtitle}>{children}</h2>
    )
}