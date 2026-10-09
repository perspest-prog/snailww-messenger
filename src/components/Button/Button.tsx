import styles from './Button.module.css'

interface ButtonProps {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}

const Button = ({title, type, onClick}: ButtonProps) => {
  return (
    <button
      className={styles.button}
      type={type}
      onClick={onClick}
    >{title}</button>
  )
}

export default Button
export type {ButtonProps}
