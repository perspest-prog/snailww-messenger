import Form from '../components/Form/Form.tsx'

function SignUp() {
  return (
    <div className="wrapper">
      <Form
        title="Регистрация"
        fields={[
          { label: 'Почта',
            name: 'email',
            type: 'email',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите почту' },
          { label: 'Логин',
            name: 'login',
            type: 'text',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите логин' },
          { label: 'Имя',
            name: 'firstname',
            type: 'text',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите имя' },
          { label: 'Фамилия',
            name: 'lastname',
            type: 'text',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите фамилию' },
          { label: 'Телефон',
            name: 'phone',
            type: 'tel',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите телефон' },
          { label: 'Пароль',
            name: 'password',
            type: 'password',
            required: true,
            getValidationError: (value) => {
              if (!value) {
                return 'Введите пароль'
              }
              if (value.length < 8) {
                return 'Пароль должен содержать не менее 8 символов'
              }
              return ''
            } },
          { label: 'Пароль (еще раз)',
            name: 'confirmPassword',
            type: 'password',
            required: true,
            getValidationError: (value) => value ? '' : 'Повторите пароль' },
        ]}
        button={{ title: 'Зарегистрироваться', type: 'submit' }}
        link={{ title: 'Уже есть аккаунт?', href: '/signin' }}
        action={(data) => console.log(data)}
      />
    </div>
  )
}

export default SignUp
