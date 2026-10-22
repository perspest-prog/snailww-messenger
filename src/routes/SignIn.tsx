import Form from '../components/Form/Form.tsx'

function SignIn() {
  return (
    <div className="wrapper">
      <Form
        title="Вход"
        fields={[
          { label: 'Логин',
            name: 'login',
            type: 'text',
            required: true,
            getValidationError: (value) => value ? '' : 'Введите логин' },
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
        ]}
        button={{ title: 'Авторизоваться', type: 'submit' }}
        link={{ title: 'Нет аккаунта?', href: '/signup' }}
        action={(data) => console.log(data.get('login'), data.get('password'))}
      />
    </div>
  )
}

export default SignIn
