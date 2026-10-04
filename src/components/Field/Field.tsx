import styles from './Field.module.css'

interface FieldProps {
  label: string;
  id: string;
  type: string;
}

const Field = ({label, id, type}: FieldProps) => {
  return (
    <div className={styles.field}>
      <label className={styles.field__label} htmlFor={id}>{label}</label>
      <input
        className={styles.field__input}
        id={id}
        type={type}
      >
      </input>
    </div>
  )
}

export default Field
export type {FieldProps}
