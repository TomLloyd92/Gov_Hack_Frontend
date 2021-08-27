import ButtonNeon from "./ButtonNeon";
import HeaderItem from "./HeaderItem";
import {HomeIcon, LightningBoltIcon, SupportIcon, TemplateIcon  } from '@heroicons/react/outline'

function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className="flex flex-grow justify-evenly max-w-2xl whitespace-nowrap" >
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='GOVERNANCE' Icon={LightningBoltIcon}/>
                <HeaderItem title='USER DASHBOARD' Icon={TemplateIcon}/>
                <HeaderItem title='META TOKEN' Icon={SupportIcon}/>
            </div>
            <div className="md:pr-16 sm:pr-0 ">
                <ButtonNeon/>
            </div>

            {/* <div>
                <h4 className='animate-pulse cursor-pointer hover:text-[#66FF00] transition duration-100 transform hover:scale-125'>METAVERSE DAO</h4>
            </div> */}
        </header>
    )
}

export default Header;