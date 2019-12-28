import React from 'react';

interface Section {
  name: string;
  items?: string[];
}

interface ISection {
  section: Section;
}

const OverviewSection: React.FC<ISection> = (props) => {
  return (
    <div>
      <h1>{props.section.name}</h1>
      <div>
        {getItems(props.section.items)}
      </div>
    </div>
  );
}

export default OverviewSection;


function getItems(items?:string[]) {
  if (!items) {
    return 'work in progress';
  }
  return items.map(item => <div key={item}>{item}</div>);
}
