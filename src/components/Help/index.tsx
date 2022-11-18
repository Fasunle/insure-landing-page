import snappyProcessIcon from '../../assets/icon-snappy-process.svg';
import affordableIcon from '../../assets/icon-affordable-prices.svg';
import peopleFirstIcon from '../../assets/icon-people-first.svg';

export default function Help() {
  return (
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
  );
}
