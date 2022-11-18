import bgPatternFooterDesktop from '../../assets/bg-pattern-footer-desktop.svg';
import bgPatternFooterMobile from '../../assets/bg-pattern-footer-mobile.svg';
import logo from '../../assets/logo.svg';
import facebookIcon from '../../assets/icon-facebook.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import instagramIcon from '../../assets/icon-instagram.svg';
import pinterestIcon from '../../assets/icon-pinterest.svg';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer--header'>
        <div className='imageContainer'>
          <img className='icon' src={logo} alt='insure logo' />
        </div>
        <div className='socials'>
          <img src={facebookIcon} alt='' className='icon' />
          <img src={twitterIcon} alt='' className='icon' />
          <img src={pinterestIcon} alt='' className='icon' />
          <img src={instagramIcon} alt='' className='icon' />
        </div>
      </div>

      <div className='information'>
        <div className='our-company'>
          <a href='#/' className='title'>
            Our Company
          </a>
          <a href='#/'>How we work</a>
          <a href='#/'>Why Insure?</a>
          <a href='#/'>View plans</a>
          <a href='#/'>Reviews</a>
        </div>

        <div className='help-me'>
          <a href='#/' className='title'>
            Help me
          </a>
          <a href='#/'>FAQ</a>
          <a href='#/'>Terms of use</a>
          <a href='#/'>Privacy</a>
          <a href='#/'>policy</a>
          <a href='#/'>Cookies</a>
        </div>

        <div className='contact'>
          <a href='#/' className='title'>
            Contact
          </a>
          <a href='#/'>Sales</a>
          <a href='#/'>Support</a>
          <a href='#/'>Live chat</a>
        </div>

        <div className='others'>
          <a href='#/' className='title'>
            Others
          </a>
          <a href='#/'>Careers</a>
          <a href='#/'>Press</a>
          <a href='#/'>Licenses</a>
        </div>
      </div>

      <picture className='bg-pattern'>
        <source media='(min-width: 46.25em)' srcSet={bgPatternFooterDesktop} />
        <img src={bgPatternFooterMobile} alt='' />
      </picture>
    </footer>
  );
}
