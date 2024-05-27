import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';
import PublicRoute from './helper/PublicRoute';
import ProtectedRoutes from './helper/ProtectedRoute';
import HomePage from './pages/HomePage';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={
            <PublicRoute>
          <Login/>
          </PublicRoute>}/>
          <Route path='/signup' element={
          <PublicRoute>
          <Signup/>
          </PublicRoute>}/>
          <Route path='/' element={
            <ProtectedRoutes>
            <Header/>
            <HomePage/>
            </ProtectedRoutes>
            }/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
