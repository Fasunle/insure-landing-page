import Header from './components/Header';
import Hero from './components/Hero';
import Help from './components/Help';
import MoreInfo from './components/MoreInfo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Help />
        <MoreInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;
