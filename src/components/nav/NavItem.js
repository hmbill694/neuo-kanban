import React from 'react'
import InsetOnHoverButton from '../general/InsetOnHoverButton'

const NavItem = ({label = 'fish', clickFunction, styles = 'w-full'}) => {
    return (
        <li className="rounded w-full my-2 h-16 flex justify-center items-center">
            <InsetOnHoverButton {...{label, styles, clickFunction}} />
        </li>
    )
}

export default NavItem
