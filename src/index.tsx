import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Field from './Field.tsx'
import Button from './Button.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Field
      label="Логин"
      id="login"
      type="text"
    />
    <Field
      label="Пароль"
      id="password"
      type="password"
    />
    <Button title="Авторизоваться" type="button" />

  </StrictMode>,
)
