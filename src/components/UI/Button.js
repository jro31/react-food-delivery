import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button className={`
      ${styles.button}
      ${props.filled ? styles.filled : styles.outlined}
      ${props.squared ? styles.squared : styles.rounded}
      ${props.thick ? styles.thick : styles.small}
    `}>
      {props.children}
    </button>
  )
}

export default Button;
