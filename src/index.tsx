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
          {label: 'Логин', id: 'login', type: 'text'},
          {label: 'Пароль', id: 'password', type: 'password'},
        ]}
        button={{title: 'Авторизоваться', type: 'button'}}
        link={{title: 'Нет аккаунта?', href: '#'}}
      />
    </div>
  </StrictMode>,
)
