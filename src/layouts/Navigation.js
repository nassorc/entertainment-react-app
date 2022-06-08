import { Link } from 'react-router-dom'
import { Nav, NavLinks, LogoText } from '../components/styles'
function Navigation() {
    return(
        <header>
            <Nav>
                <div><LogoText><Link to="/">Movie App</Link></LogoText></div>
                <NavLinks>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Create Review</Link></li>
                </NavLinks>
            </Nav>
        </header>
    )
}

export default Navigation;