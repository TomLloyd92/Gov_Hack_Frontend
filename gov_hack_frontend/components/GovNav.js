import NavItem from "./NavItem";
import {TableIcon, NewspaperIcon } from '@heroicons/react/outline'

function GovNav() {
    return (
        <nav className="navbar">
            <div className='flex justify-center whitespace-nowrap space-x-10 '>
            <NavItem title='Propsals' Icon={TableIcon}/>
            <NavItem title='Create Proposal' Icon={NewspaperIcon}/>
            </div>
        </nav>
    )
}

export default GovNav;
