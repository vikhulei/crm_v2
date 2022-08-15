import {NavBarWrapper, Title, Logo} from "./NavBarStyle"
import logo from "../../../assets/logo.png"

const NavBar = () => {
    return (
        <NavBarWrapper>
            <Logo src={logo} alt="logo" />
            <Title>Contact Store</Title>
        </NavBarWrapper>
    )
}

export default NavBar