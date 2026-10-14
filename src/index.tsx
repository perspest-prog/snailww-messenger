import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Form from './components/Form/Form.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="wrapper">
      <Form
        title="Вход"
        fields={[
          {label: 'Логин', name: 'login', type: 'text', required: true, getValidationError: (value) => value ? '' : 'Введите логин'},
          {label: 'Пароль', name: 'password', type: 'password', required: true, getValidationError: (value) => value ? '' : 'Введите пароль'},
        ]}
        button={{title: 'Авторизоваться', type: 'submit'}}
        link={{title: 'Нет аккаунта?', href: '#'}}
        action={(data) => console.log(data.get('login'), data.get('password'))}
      />
    </div>
  </StrictMode>,
)
