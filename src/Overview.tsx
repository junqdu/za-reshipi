import React from 'react';
import data from './data/overview'
import OverviewSection from './components/OverviewSection';

const Overview: React.FC = () => {
  return (
    <div>
      {data.map((section) => (
        <OverviewSection section={section} key={section.name}></OverviewSection>
      ))}
    </div>
  );
}

export default Overview;
