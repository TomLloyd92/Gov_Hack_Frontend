import { useRouter } from "next/router";

function NavItem({ Icon, title }) {

    const router = useRouter();

    return (
        //<div className= "flex flex-col items-center group cursor-pointer w-8 sm:w-20 hover:animate-puls">
        <div className=' cursor-pointer transition duration-100 transform hover:scale-125 flex flex-col items-center group py-4'
            onClick={() => router.push(`/?${title}`)}
        >
            <Icon className="h-6 mb-2" />
            <h2 className >{title}</h2>
        </div>
    )
}

export default NavItem;