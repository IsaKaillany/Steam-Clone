import styles from './button.module.css'

/*
    Passa o parâmetro fullWidth quando a tag é chamada para que a modificação do css seja aplicada.
*/

export default function Button({children, fullWidth, ...props}) {
    return (
        <button className={`${styles.button} ${fullWidth && styles.fullwidth}`} {...props}>{children}</button>
    )
}