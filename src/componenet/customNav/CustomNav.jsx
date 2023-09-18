import { useState } from "react";
import Link from "../link/Link";
import { HiOutlineMenuAlt1,HiLockClosed } from 'react-icons/hi';


const CustomNav = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Products', path: '/products' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'NotFound', path: '*' },
      ];
      
    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 
                    <HiLockClosed></HiLockClosed>
                     :  <HiOutlineMenuAlt1 className="text-3xl "></HiOutlineMenuAlt1>  
                }
             
             
            </div>
          
          
         <ul className={`md:flex duration-1000  absolute md:static ${open ? 'top-16' : '-top-60'} bg-yellow-400 shadow-lg px-6`}>
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
         </ul>
           
            
        </nav>
    );
};

export default CustomNav;