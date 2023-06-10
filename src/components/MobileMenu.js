// components/MobileMenu.js
import { useRef, useEffect, useContext } from 'react';
import ProImage from '@/components/ProImage';
import Nav from '@/components/Nav';
import { CSSTransition } from 'react-transition-group';
import { GlobalContext } from '../context/GlobalState';

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

    if (state.isOverlayActive) {
        return null; // Don't render the MobileMenu component when the overlay is active
    }

    return (
        <div>
            <div onClick={handleMenuClick} className='menu-icon'>
                <span>☰</span>
            </div>
            <CSSTransition
                in={state.isMenuOpen}
                timeout={300}
                classNames="menu"
                unmountOnExit
                nodeRef={menuRef}
            >
                <div ref={menuRef} className={state.isMenuOpen ? 'mobile-menu' : 'mobile-menu hidden'}>
                    <div onClick={handleMenuClick} className='close-icon'>
                        <span>&#10005;&nbsp;</span>
                        <span>close</span>
                    </div>
                    <br />
                    <ProImage />
                    <Nav />
                </div>
            </CSSTransition>
        </div>
    );
}
