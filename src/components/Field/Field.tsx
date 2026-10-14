import { useState } from 'react'
import styles from './Field.module.css'
import Text, {type TextProps} from '../Text/Text'

interface FieldProps {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  pattern?: string;
  getValidationError?: (value: string) => string;
}

const Field = ({label, name, type, required, pattern, getValidationError}: FieldProps) => {
  const [error, setError] = useState<string>('')
  const handleInvalid = (event: React.InvalidEvent<HTMLInputElement>) => {
    event.preventDefault()
    const value = event.currentTarget.value
    if (getValidationError) {
      setError(getValidationError(value))
    }
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (getValidationError) {
      setError(getValidationError(event.currentTarget.value))
    }
  }

  return (
    <div className={styles.field}>
      <Text
        tag="label"
        variant="label"
        htmlFor={name}
        value={label}
      />
      <input
        className={styles.input}
        name={name}
        id={name}
        type={type}
        required={required}
        pattern={pattern}
        onChange={handleChange}
        onInvalid={handleInvalid}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  )
}

export default Field
export type {FieldProps}
