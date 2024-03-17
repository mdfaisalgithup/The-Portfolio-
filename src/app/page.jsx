import Projects from '@/Companent/Projects/Projects';
import Services from '@/Companent/Services/Services';
import Skills from '@/Companent/Skills/Skills';
import SocialMediaHandles from '@/Companent/SocialMediaHandles/SocialMediaHandles';
import Testimonials from '@/Companent/Testimonials/Testimonials';

import React from 'react';

const page = () => {
  
  return (
<div>
  {/* Hero Section */}
  <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello There</h1>
      <p className="py-6">Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

{/* Service Section */}
<Services></Services>
<Projects></Projects>
<Skills></Skills>
<Testimonials></Testimonials>
<SocialMediaHandles></SocialMediaHandles>
</div>
 
  );
};

export default page;
