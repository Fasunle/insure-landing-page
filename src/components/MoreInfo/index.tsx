import bgPatternHowWeWorkMobile from '../../assets/bg-pattern-how-we-work-mobile.svg';
import bgPatternHowWeWorkDesktop from '../../assets/bg-pattern-how-we-work-desktop.svg';

export default function MoreInfo() {
  return (
    <section className='more-info'>
      <h1>Find out more about how we work</h1>
      <button className='btn btn--how-we-work'>How we work</button>
      <picture className='more-info-bg'>
        <source
          media='(min-width: 46.25em)'
          srcSet={bgPatternHowWeWorkDesktop}
        />
        <img src={bgPatternHowWeWorkMobile} alt='' />
      </picture>
    </section>
  );
}
