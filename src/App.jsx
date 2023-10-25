import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/SignIn';
import { AuthContextProvider } from './api/AuthContextProvider';

function App() {
  return(
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/login" element={ <Login /> }/>
      </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  )
}

export default App
