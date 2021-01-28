import React from 'react'
import { map } from '../../utils/fp'
import NavItem from './NavItem'

const NavList = ({ navItems = [{}, {}, {}] }) => {
    return (
        <ul className="w-full h-full nm-inset-white-lg p-8">
            { map((x, index) => <NavItem {...{index, ...x}}/>, navItems) }
        </ul>
    )
}

export default NavList
