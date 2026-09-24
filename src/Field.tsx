interface FieldProps {
  label: string;
  id: string;
  type: string;
}

const Field = ({label, id, type}: FieldProps) => {
  return (
    <div className="field">
      <label className="field__label" htmlFor={id}>{label}</label>
      <input
        className="field__input"
        id={id}
        type={type}
      >
      </input>
    </div>
  )
}

export default Field
