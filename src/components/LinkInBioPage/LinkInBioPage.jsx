// components/LinkInBioPage/LinkInBioPage.js
import React from 'react';
import Logo from './Logo';
import Tagline from './Tagline';
import FeaturedBanner from './FeaturedBanner';
import SocialIcons from './SocialIcons';
import Button from './Button';
import InstagramGrid from './InstagramGrid';
import TextImageSection from './TextImageSection';
import MailchimpForm from './MailchimpForm';
import RotatingLinks from './RotatingLinks';
import ExclusiveContent from './ExclusiveContent';
import SEO from './SEO';

 const LinkInBioPage = () => {
  const socialLinksArray = [
    { url: 'https://facebook.com', icon: '/path/to/facebook-icon.png', name: 'Facebook' },
    { url: 'https://twitter.com', icon: '/path/to/twitter-icon.png', name: 'Twitter' },
  ];

  const instagramImagesArray = [
    { url: '/path/to/image1.jpg', link: 'https://instagram.com/p/1' },
    { url: '/path/to/image2.jpg', link: 'https://instagram.com/p/2' },
  ];

  const rotatingLinksArray = [
    { url: 'https://example.com/link1', text: 'Link 1' },
    { url: 'https://example.com/link2', text: 'Link 2' },
  ];

  const someCondition = true; // Replace with actual condition logic

  return (
    <div>
      <SEO title="My Brand - Link in Bio" description="Welcome to my link in bio page!" />
      <Logo url="/path/to/logo.png" />
      <Tagline text="Your Brand Tagline Here" />
      <FeaturedBanner imageUrl="/path/to/banner.png" text="Check this out!" link="/promo" />
      <SocialIcons links={socialLinksArray} />
      <Button text="Visit our site" url="https://example.com" />
      <InstagramGrid images={instagramImagesArray} />
      <TextImageSection text="Some important information." imageUrl="/path/to/image.png" />
      <MailchimpForm actionUrl="https://example.us1.list-manage.com/subscribe/post" />
      <RotatingLinks links={rotatingLinksArray} />
      <ExclusiveContent condition={someCondition} content="Special offer just for you!" />
    </div>
  );
};

export default LinkInBioPage;