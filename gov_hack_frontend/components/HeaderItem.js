
import Link from 'next/link'

function HeaderItem({Icon, title, link}) {

    return (
        <Link href={`/${link}`}>
            <div className='flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:animate-pulse transition duration-100 transform hover:scale-125 hover:text-[#66FF00]' >
                <Icon className="h-8 mb-1"/>
                <p className='opacity-0 tracking-widest  group-hover:opacity-100 '> 
                    {title} 
                </p>
            </div>
        </Link>
    )
}

export default HeaderItem
