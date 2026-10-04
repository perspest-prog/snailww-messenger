import styles from './Button.module.css'

interface ButtonProps {
  title: string;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({title, type}: ButtonProps) => {
  return (
    <button className={styles.button} type={type}>{title}</button>
  )
}

export default Button
export type {ButtonProps}
