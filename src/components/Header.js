import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () => {

    const [btnName, setButtonName] = useState('Login');
    return (
        <div className='header'>
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <li><button className="login-name" onClick={() => {
                        btnName === 'Login' ? setButtonName('Logout') : setButtonName('Login');
                    }}> {btnName} </button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;