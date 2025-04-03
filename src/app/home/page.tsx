import React from 'react';

import SectionDestinations from './SectionDestinations';
import SectionExperience from './SectionExperience';
import SectionHeader from './SectionHeader';
import SectionLogos from './SectionLogos';
import SectionReviews from './SectionReviews';
import SectionTravel from './SectionTravel';
import SectionWeekend from './SectionWeekend';

const HomePage = () => {
  return (
    <div>
      <div className="container mt-20">
        <SectionHeader />
      </div>

      <div className="py-10">
        <SectionLogos />
      </div>

      <div className="py-24">
        <SectionDestinations />
      </div>

      <div className="overflow-hidden py-24">
        <SectionTravel />
      </div>

      <div className="overflow-hidden py-24">
        <SectionExperience />
      </div>

      <div className="relative my-24 bg-primary/30 dark:bg-primary/20">
        <SectionWeekend />
      </div>

      <div className="py-24">
        <SectionReviews />
      </div>
    </div>
  );
};

export default HomePage;
