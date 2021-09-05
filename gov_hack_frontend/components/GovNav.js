import NavItem from "./NavItem";
import {TableIcon, NewspaperIcon } from '@heroicons/react/outline'
import Governance from "../pages/governance";

const govLink = "governance";

function GovNav() {
    return (
        <nav className="navbar">
            <div className='flex justify-center whitespace-nowrap space-x-10 '>
            <NavItem title='Propsals' Icon={TableIcon} link={"proposals"}/>
            <NavItem title='Create Proposal' Icon={NewspaperIcon} link={"createproposal"}/>
            </div>
        </nav>
    )
}

export default GovNav;
