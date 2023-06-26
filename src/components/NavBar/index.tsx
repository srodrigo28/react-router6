import { Link } from "react-router-dom";
import * as S from './styles'

export function NavBar(){
    return(
        <S.Container>
            <S.NavItem> 
                <Link to="/">Home</Link>
            </S.NavItem>
            <S.NavItem>
                <Link to="/login">Login</Link>
            </S.NavItem>
        </S.Container>
    )
}