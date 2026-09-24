interface ButtonProps {
  title: string;
  type: 'submit' | 'reset' | 'button';
}

const Button = ({title, type}: ButtonProps) => {
  return (
    <button className="auth__button" type={type}>{title}</button>
  )
}

export default Button
