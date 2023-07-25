import { Nunito_Sans } from 'next/font/google';
import { Home } from './components/home/Home'
import { About } from './components/about/About';
import { Services } from './components/services/Services';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export default function Page() {
  return (
    <>
      <div className={`${nunito.className}`}>
        <Home />

        <About />

        <Services />

        <Portfolio />

        <Contact />
      </div>
    </>
  );
}
