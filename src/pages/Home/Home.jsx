import React from 'react';
import Navbar from '../../components/Shared/Navbar'
import Footer from '../../components/Shared/Footer';
import Faq from '../../components/FAQ/FAQ';
import Partnership from '../../components/Partnership/Partnership';
import Pricing from '../../components/Pricing/Pricing,';
import CTA from '../../components/CTA/CTA';
import Service from '../../components/Service/Service';
import Testimonials from '../../components/Testimonials/Testimonials';
import Leads from '../../components/Leads/Leads';
import Logos from '../../components/Client Logos/Logos';
import HeroSection from '../../components/Hero Section/HeroSection';

const Home = () => {
  return (
    <div style={{backgroundColor: '#F2F4F3'}}>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection/>

      {/* Client Logos Section */}
      <Logos/>

      {/* Get Leads Section */}
      <Leads/>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <Service/>

      {/* Ready to Start Section */}
    <CTA/>

      {/* Pricing Section */}
      <Pricing/>

      {/* Partnership Fit Section */}
    <Partnership/>

      {/* FAQ Section */}
      <Faq/>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;