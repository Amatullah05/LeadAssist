import React from 'react';
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer';
import Faq from '../../components/FAQ/FAQ';
import Partnership from '../../components/Partnership/Partnership';
import Pricing from '../../components/Pricing/Pricing';
import CTA from '../../components/CTA/CTA';
import Service from '../../components/Service/Service';
import Testimonials from '../../components/Testimonials/Testimonials';
import Leads from '../../components/Leads/Leads';
import Logos from '../../components/Client Logos/Logos';
import HeroSection from '../../components/Hero Section/HeroSection';
import CTA2 from '../../components/CTA2/CTA2';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Logos/>
      <Leads/>
      <Testimonials />
      <Service/>
      <CTA/>
      <Pricing/>
      <Partnership/>
      <Faq/>
      <CTA2/>
      <Footer/>
    </div>
  );
};

export default Home;