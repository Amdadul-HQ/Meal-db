import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <header className="max-w-screen-xl mx-auto">
            <nav className="flex justify-between items-center">
            <h1 className="text-4xl text-orange-500 font-semibold">MEAL DB</h1>
                <ul className="text-xl font-medium space-x-6">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/foods'>Foods</NavLink>
                    <NavLink to='/service'>Service</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;