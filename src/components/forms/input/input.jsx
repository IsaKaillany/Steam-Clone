import styles from './input.module.css'

/*
    Todas as props que não estão mapeadas na esquerda serão passadas no componente de input.
*/

export default function Input({fullWidth, ...props}) {
    return (
        <input 
            className={`${styles.input} ${fullWidth && styles.fullwidth}`} 
            {...props}
        />
    )
}