import { useState } from 'react'
import Field, { type FieldProps } from '../Field/Field'
import Button, { type ButtonProps } from '../Button/Button'
import Link, { type LinkProps } from '../Link/Link'
import Text, { type TextProps } from '../Text/Text'
import styles from './Form.module.css'

interface FormProps {
  title: string
  fields: FieldProps[]
  button: ButtonProps
  link: LinkProps
  action: (data: FormData) => void
}

const Form = ({ title, fields, button, link, action }: FormProps) => {
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    const password = formData.get('password')
    const confirmPassword = formData.get('confirmPassword')

    if (
      typeof password === 'string' &&
      typeof confirmPassword === 'string' &&
      password !== confirmPassword
    ) {
      setConfirmPasswordError('Пароли не совпадают')
      return
    }
    setConfirmPasswordError('')
    action(formData)
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Text
        tag='h1'
        variant='title'
        value={title}
      />
      {fields.map((field) => (
        <Field
          key={field.name}
          name={field.name}
          label={field.label}
          type={field.type}
          required={field.required}
          pattern={field.pattern}
          getValidationError={field.getValidationError}
          externalError={
            field.name === 'confirmPassword' ? confirmPasswordError : undefined
          }
          onValueChange={() => {
            if (
              field.name === 'password' ||
              field.name === 'confirmPassword'
            ) {
              setConfirmPasswordError('')
            }
          }}
        />
      ))}
      <Button title={button.title} type={button.type} />
      <Link title={link.title} href={link.href} />
    </form>
  )
}

export default Form
