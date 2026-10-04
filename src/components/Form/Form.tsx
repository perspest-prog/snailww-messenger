import Field, {type FieldProps} from '../Field/Field'
import Button, {type ButtonProps} from '../Button/Button'
import Link, {type LinkProps} from '../Link/Link'
import styles from './Form.module.css'

interface FormProps {
  title: string;
  fields: FieldProps[];
  button: ButtonProps;
  link: LinkProps;
  // action: () => void;
}

const Form = ({title, fields, button, link}: FormProps) => {
  return (
    <form className={styles.form}>
      <h1 className={styles.h1}>{title}</h1>
      {fields.map((field) => (
        <Field
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
        />
      ))}
      <Button title={button.title} type={button.type} />
      <Link title={link.title} href={link.href} />
    </form>
  )
}

export default Form
