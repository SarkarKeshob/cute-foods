import { NavLink, useNavigate} from "react-router-dom";
import './Header.css';
import { IoMenuSharp } from "react-icons/io5";
import {useState } from "react";

const Header = () => {
    const navigate=useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const handleBreadCumbClick = () => setShowMenu(!showMenu);
    const handleSearch = () => {
        const searchedValue = (document.getElementById('search-key').value);
        navigate(`/meal/searchedProducts/${searchedValue}`)
        document.getElementById('search-key').value='';
    };
    return (
        <div>
            <nav className="flex justify-between items-center bg-[#096B72] text-white">
                <div className="w-full md:w-fit">
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'btn btn-ghost md:xl lg:text-2xl' : 'btn btn-ghost text-lg lg:text-xl'}>Cute Foods</NavLink>
                </div>
                <div >
                    <IoMenuSharp className={'lg:hidden mx-auto'} onClick={handleBreadCumbClick}></IoMenuSharp>
                    <ul className={`menu menu-vertical justify-between lg:menu-horizontal px-1 ${showMenu ? 'hidden' : 'block'}`}>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost md:xl lg:text-2xl' : 'btn btn-ghost text-lg lg:text-xl'}>Home</NavLink>
                        </li>
                        {/* <li>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-ghost md:xl lg:text-2xl' : 'btn btn-ghost text-lg lg:text-xl'}>About</NavLink>
                        </li>
                        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-ghost md:xl lg:text-2xl' : 'btn btn-ghost text-lg lg:text-xl'}>Contact</NavLink></li> */}
                        <div className="flex items-center" >
                            <input className="input input-bordered join-item join w-5/6 md:w-fit text-black" placeholder="Search Foods Here" id="search-key" />
                            <button className="btn join-item rounded-r-full" onClick={handleSearch}>Search</button>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;