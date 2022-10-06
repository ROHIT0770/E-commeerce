import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/SignUp')
    }
    return (
        <div>
        <img alt="logo" className='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHr9BcmKW6GVr9mpun0g9GhjHddxQjMSWFcg&usqp=CAU' />
            {auth ? <ul className="nav-ul">
                <li><Link to="/">product</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Product</Link></li>

                <li><Link to="/Profile"> Profile</Link></li>
                <li><Link onClick={logout} to="/SignUp">Logout({JSON.parse(auth).name})</Link></li>

            </ul>
                :
                <ul className="nav-ul nav-right">
                    <li><Link to="/signup"> SignUp</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;