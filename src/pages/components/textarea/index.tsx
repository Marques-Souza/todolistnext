import { HTMLProps } from 'react'
import styles from './style.module.css'

// Alterando para export default
const Textarea = ({ ...rest }: HTMLProps<HTMLTextAreaElement>) => {
    return (
        <textarea className={styles.textarea} {...rest}>
        </textarea>
    )
}

export default Textarea;  
