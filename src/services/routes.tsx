import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../Home'
import { Login } from '../Login'
import { NavBar } from '../NavBar'
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