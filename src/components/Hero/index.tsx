import lifeInsuranceMobileImage from '../../assets/image-intro-mobile.jpg';
import lifeInsuranceDesktopImage from '../../assets/image-intro-desktop.jpg';
import bgPatternIntroLeftMobile from '../../assets/bg-pattern-intro-left-mobile.svg';
import bgPatternIntroLeftDesktop from '../../assets/bg-pattern-intro-left-desktop.svg';
import bgPatternIntroRightMobile from '../../assets/bg-pattern-intro-right-mobile.svg';
import bgPatternIntroRightDesktop from '../../assets/bg-pattern-intro-right-desktop.svg';

export default function Hero() {
  return (
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
        <hr className='divider' />
        <h1 className='title'>
          Humanizing <span className='title--wrap'>your insurance.</span>
        </h1>
        <p className='description'>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that&#8217;s right
          for you. Ensure you and your loved ones are protected.
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
  );
}
