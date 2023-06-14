import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const AuthenticatedNavbar = () => {
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <button onClick={handleLogout}>Log Out</button>
                </li>
            </ul>
        </nav>
    );
};

export default AuthenticatedNavbar;
