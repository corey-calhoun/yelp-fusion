import { NavLink } from "react-router-dom";
import styled from "styled-components"
import logo from '../logo.png'

function Header() {
    return (
        <HeaderContainer>
            <img 
                src={logo}
                width={150}
                height={80}
                alt="logo"
                objectFit="fill"
            />
            <HeaderNavigation>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/businesses'>Businesses</NavLink>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </HeaderNavigation>
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1a1a1a;
    height: 80px;
`;

const HeaderNavigation = styled.nav`
    display: flex;
    padding: 10px;
    width: 60%;
    justify-content: space-evenly;
    color: whitesmoke;
    font-size: 1.2rem;
    font-weight: semi-bold;
`;