import NavItem from "./NavItem";
import { CurrencyDollarIcon, ChartBarIcon } from '@heroicons/react/outline'

function TokenNav() {
    return (
        <nav className="navbar">
            <div className='flex justify-center whitespace-nowrap space-x-10 '>
            <NavItem title='Buy Meta Token' Icon={CurrencyDollarIcon} link="buymetatoken"/>
            <NavItem title='Price Chart' Icon={ChartBarIcon}/>
            </div>
        </nav>
    )
}

export default TokenNav;