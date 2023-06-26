import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../views/Home'
import { Login } from '../views/Login'
import { NavBar } from '../components/NavBar'
export function RouteApp(){
    return(
        <BrowserRouter>
                <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={ <Login/> } />
            </Routes>
        </BrowserRouter>
    )
}