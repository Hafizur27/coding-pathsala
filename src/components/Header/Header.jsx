import React from 'react';
import img from '../../nav-img/nav.jpg'

const Header = () => {
    return (
        <div>
           <div className="navbar bg-base-100 w-5/6 mx-auto pt-6">
                    <div className="flex-1">
                        <a className="btn btn-secondary normal-case text-xl">Coding_Pathsala</a>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img src={img} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li><a className="justify-between">Profile</a></li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Header;