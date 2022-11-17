import Header from './components/Header';
import lifeInsuranceMobileImage from './assets/image-intro-mobile.jpg';
import lifeInsuranceDesktopImage from './assets/image-intro-desktop.jpg';
import bgPatternIntroLeftMobile from './assets/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroLeftDesktop from './assets/bg-pattern-intro-left-desktop.svg';
import bgPatternIntroRightMobile from './assets/bg-pattern-intro-right-mobile.svg';
import bgPatternIntroRightDesktop from './assets/bg-pattern-intro-right-desktop.svg';
import snappyProcessIcon from './assets/icon-snappy-process.svg';
import affordableIcon from './assets/icon-affordable-prices.svg';
import peopleFirstIcon from './assets/icon-people-first.svg';

function App() {
  return (
    <div className='App'>
      <Header />
      <section className='hero'>
        <picture className='hero__image'>
          <source
            media='(min-width: 46.25em)'
            srcSet={lifeInsuranceDesktopImage}
          />
          <img
            src={lifeInsuranceMobileImage}
            alt='get your life insurance coverage'
          />
        </picture>
        <div className='hero__info'>
          <h1 className='title'>
            Humanizing <span className='title--wrap'>your insurance.</span>
          </h1>
          <p className='description'>
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that&#8217;s
            right for you. Ensure you and your loved ones are protected.
          </p>
          <button className='btn btn--hero'>View plans</button>
          <div className='bg-pattern'>
            <picture className='hero__bg--top'>
              <source
                media='(min-width: 46.25em)'
                srcSet={lifeInsuranceDesktopImage}
              />
              <img src={bgPatternIntroLeftMobile} alt='' />
            </picture>

            <picture className='hero__bg--bottom'>
              <source
                media='(min-width: 46.25em)'
                srcSet={lifeInsuranceDesktopImage}
              />
              <img src={bgPatternIntroRightMobile} alt='' />
            </picture>
          </div>
        </div>

        <div className='bg-desktop'>
          <img src={bgPatternIntroRightDesktop} alt='' />
          <img src={bgPatternIntroLeftDesktop} alt='' />
        </div>
      </section>
      <section className='help'>
        <div className='divider'></div>
        <h2>We&#8217;re different</h2>

        <div className='help__items'>
          <div className='help__item'>
            <div className='imageContainer'>
              <img
                className='icon'
                src={snappyProcessIcon}
                alt='snappy process'
              />
            </div>
            <h3 className='help--name'>Snappy Process</h3>
            <p className='help--description'>
              Our application process can be completed in minutes, not
              hours.Don&#8217;t get stuck filling in tedious forms.
            </p>
          </div>
          <div className='help__item'>
            <div className='imageContainer'>
              <img
                className='icon'
                src={affordableIcon}
                alt='affordable prices'
              />
            </div>
            <h3 className='help--name'>Affordable Prices</h3>
            <p className='help--description'>
              We don&#8217;t want you worrying about high monthly costs. Our
              prices may be low, but we still offer the best coverage possible.
            </p>
          </div>
          <div className='help__item'>
            <div className='imageContainer'>
              <img className='icon' src={peopleFirstIcon} alt='people first' />
            </div>
            <h3 className='help--name'>People First</h3>
            <p className='help--description'>
              Our plans aren&#8217;t full of conditions and clauses to prevent
              payouts. We make sure you&#8217;re covered when you need it.
            </p>
          </div>
        </div>
      </section>
      Find out more about how we work How we work Our company How we work Why
      Insure? View plans Reviews Help me FAQ Terms of use Privacy policy Cookies
      Contact Sales Support Live chat Others Careers Press Licenses
    </div>
  );
}

export default App;
