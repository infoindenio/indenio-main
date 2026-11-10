import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/client-results.css';

// Factual summaries of work Indenio has delivered. Add real client quotes here
// (with the client's permission) as they come in: { ..., quote: "...", person: "Name, Role" }
const results = [
  {
    client: 'Fitnesspoint',
    country: 'Norway',
    services: ['Website', 'Gym & Fitness'],
    summary: 'Website for a gym chain with 40+ centres: searchable centre finder, online membership signup, drop-in passes, gift cards and personal training pages.',
    link: 'https://www.fitnesspoint.no',
  },
  {
    client: 'DreamCraft Furniture',
    country: 'United Kingdom',
    services: ['WooCommerce', 'Meta Ads'],
    summary: 'Custom WooCommerce store with a bespoke size, fabric and storage options plugin, Stripe checkout, Meta Pixel tracking and live sales campaigns.',
    link: 'https://dreamcraftfurniture.net',
  },
  {
    client: 'Integra Energy Group',
    country: 'Australia & Pakistan',
    services: ['Custom Theme', 'Redesign'],
    summary: 'Redesign on a custom WordPress theme for a solar company: product pages for panels, inverters and batteries, a datasheet library and enquiry CTAs.',
    link: 'https://integrasolar.com.au',
  },
  {
    client: 'The Anna Studio',
    country: 'United States',
    services: ['Local SEO', 'Social Media', 'Meta Ads'],
    summary: 'Ongoing SEO and social media for a beauty salon, with premium on-brand posts and reels and Meta ads driving online appointment bookings.',
    link: 'https://theannastudio.com',
  },
  {
    client: 'Cars Rental 24/7',
    country: 'Pakistan',
    services: ['Website', 'Google Ads'],
    summary: 'Custom WordPress site with fleet listings and WhatsApp booking for a rent-a-car company, backed by a Google Ads search campaign.',
    link: 'https://carsrental247.pk',
  },
  {
    client: 'OnStak',
    country: 'United States',
    services: ['SEO Audit', 'Lead Funnel'],
    summary: 'Full SEO audit, landing pages and an automated lead-capture funnel for a technology company\'s website forms.',
    link: 'https://onstak.com',
  },
];

const ClientResults = () => {
  return (
    <section className="indenio-results gray-dark pt-130 pb-100">
      <div className="container">
        <div className="row align-items-end mb-50">
          <div className="col-lg-7">
            <div className="section-title pf_fadeup">
              <span className="sub-title">Client Results</span>
              <h2>Real Work for Real Businesses</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <p className="indenio-results-intro pf_fadeup">
              From gym chains in Norway to e-commerce brands in the UK, here is what we have built and grown for our clients.
            </p>
          </div>
        </div>
        <div className="row">
          {results.map((item) => (
            <div key={item.client} className="col-lg-4 col-md-6 mb-30">
              <div className="indenio-result-card pf_fadeup">
                <div className="indenio-result-top">
                  <span className="indenio-result-country">{item.country}</span>
                  <h4>{item.client}</h4>
                </div>
                <p>{item.summary}</p>
                {item.quote && (
                  <blockquote className="indenio-result-quote">
                    “{item.quote}”<span>{item.person}</span>
                  </blockquote>
                )}
                <div className="indenio-result-tags">
                  {item.services.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="indenio-result-link">
                  Visit website <i className="bi bi-arrow-up-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-20 pf_fadeup">
          <Link to="/project" className="theme-btn style-one">
            <span className="text-flip">
              <span className="text">VIEW ALL PROJECTS</span>
              <span className="text">VIEW ALL PROJECTS</span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClientResults;
