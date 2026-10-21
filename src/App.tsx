import { HashRouter, Routes, Route } from 'react-router'
import SignIn from './routes/SignIn'
import SignUp from './routes/SignUp'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  )
}

export default App
