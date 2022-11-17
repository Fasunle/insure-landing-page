import {useState} from 'react';
import logo from '../../assets/logo.svg';
import iconClose from '../../assets/icon-close.svg';
import harmburgerMenu from '../../assets/icon-hamburger.svg';
import patternRightIntroDesktopIcon from '../../assets/bg-pattern-intro-right-desktop.svg';
import patternRightIntroMobileIcon from '../../assets/bg-pattern-intro-right-mobile.svg';
import bgPatternMobileNav from '../../assets/bg-pattern-mobile-nav.svg';
import patternLeftIntroDesktopIcon from '../../assets/bg-pattern-intro-left-desktop.svg';

export default function () {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className='header'>
      <a className='logo' href='/'>
        <img src={logo} alt='insure logo' />
      </a>
      <nav className={`nav${toggleMenu ? ' show-nav' : ''}`}>
        <ul className='nav__items' role='list'>
          <li className='nav__item'>
            <a className='nav__item--link' href='#/how-we-work'>
              How we work
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__item--link' href='#/blog'>
              Blog
            </a>
          </li>
          <li className='nav__item'>
            <a className='nav__item--link' href='#/account'>
              Account
            </a>
          </li>
          <li className='nav__item nav__item-cta'>
            <a className='nav__item--link' href='#/plans'>
              View plans
            </a>
          </li>
        </ul>
        {toggleMenu && (
          <picture className='bg-bottom'>
            <img src={bgPatternMobileNav} alt='' />
          </picture>
        )}
      </nav>
      <button className='menu' onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? (
          <img src={iconClose} alt='close menu' />
        ) : (
          <img src={harmburgerMenu} alt='open menu' />
        )}
      </button>
    </header>
  );
}
