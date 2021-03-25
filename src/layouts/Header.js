import React, { useContext, useState } from 'react'
import {Link, Redirect} from 'react-router-dom'
import {Collapse , Navbar, NavbarToggler, NavbarBrand, Nav, NavItem , NavLink , NavbarText} from 'reactstrap'

import { UserContext } from '../Context/UserContext'

const Header = () => {

    const context = useContext(UserContext)
    const [isOpen,setIsOpen] = useState(false)

    const handleLogout = e => {
        e.preventDefault();
        localStorage.removeItem("GitFireUser")
        context.setUser(null)
        reloadWin()
    }

    const reloadWin = () => {
        window.location.reload()
        return <Redirect to="/signin" />
    }

    const toggle = () =>{
        setIsOpen(!isOpen)
    }

    return(
        <Navbar color="success" light expand="md">
        <NavbarBrand><Link to='/' className="text-white">SDD GitFire App</Link></NavbarBrand>
        <NavbarText className="text-white">{
            context.user?.email || localStorage.getItem("GitFireUser") ? context.user?.email || localStorage.getItem("GitFireUser") : "" 
        }</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                {
                    context.user || localStorage.getItem("GitFireUser") ? (
                    <NavItem>
                        <NavLink className="text-white" onClick={handleLogout}>
                            Logout
                        </NavLink>
                    </NavItem>
                    ) : (
                    <>
                        <NavItem>
                            <NavLink tag={Link} to="/signin" className="text-white">
                                SignIn
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink  tag={Link} to="/signup" className="text-white">
                                SignUp
                            </NavLink>
                        </NavItem>
                    </>
                    )
                }

            </Nav>
        </Collapse>
    </Navbar>
    )
}

export default Header;