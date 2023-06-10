// components/MobileMenu.js
import { useRef, useEffect, useContext } from 'react';
import ProImage from '@/components/ProImage';
import Nav from '@/components/Nav';
import { CSSTransition } from 'react-transition-group';
import { GlobalContext } from '../context/GlobalState';  // replace with the actual path

export default function MobileMenu() {
    const { state, dispatch } = useContext(GlobalContext);
    const menuRef = useRef(null);

    const handleMenuClick = () => {
        dispatch({ type: 'TOGGLE_MENU' });
    };

    const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            dispatch({ type: 'TOGGLE_MENU' });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div onClick={handleMenuClick} className='menu-icon'>
                <span>☰</span>  {/* Here we're using a hamburger menu icon as unicode */}
            </div>
            <CSSTransition
              in={state.isMenuOpen}
              timeout={300}
              classNames="menu"
              unmountOnExit
              nodeRef={menuRef}
            >
                <div ref={menuRef} className='side-menu'>
                    <div onClick={handleMenuClick} className='close-icon'>
                        <span>&#10005;</span>  {/* Unicode "X" character */}
                        <span>Close</span>
                    </div><br/>
                    <ProImage />
                    <Nav />
                </div>
            </CSSTransition>
        </div>
    );
}
