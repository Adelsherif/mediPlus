
'use client';
import Header from "../../components/header/header";
import Homepage from '../../components/homePage/homepage';
import Servcies from '../../components/services/services';
import Emergency from '../../components/emergency/emergency';
import About from '../../components/about/about';
import Statistics from '../../components/statistics/statistics';
import Rules from '../../components/rules/rules';
import Offers from '../../components/offers/offer';
import Prices from '../../components/prices/prices';
import News from '../../components/news/news';
import Sponser from '../../components/sponser/sponser';
import Contact from '../../components/contact/contact';
import Footer from '../../components/footer/footer';
import Totop from '../../components/totop/totop';
import Vip from '../../components/vip/vip';

export default function Home() {
  return (
    <main >
      <Vip />
      <Totop />
      <Header />
      <Homepage />
      <Servcies />
      <Statistics />
      <About />
      <Emergency />
      <Rules />
      <Offers />
      <Prices />
      <News />
      <Sponser />
      <Contact />
      <Footer />
    </main>
  )
}
