/* import styles from './Button.module.css'; */
/* className={styles.button} */

function Button({onClick, children, title, disabled = false}){
    return <button className="btn btn-ghost mb-4"  onClick={onClick} title={title} disabled={disabled}>{children}</button>
}
export default Button;