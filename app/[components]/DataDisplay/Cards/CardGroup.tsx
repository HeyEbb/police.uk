import React from 'react';
import SingleCard from './SingleCard';


interface Data {
  title: string;
  description: string;
  link: string;
}

interface CardGroupProps {
  data: Data[];
}

const CardGroup: React.FC<CardGroupProps> = ({ data }) => {
  return (
    <div className='flex'>
      {data.map((item, index) => (
        <SingleCard key={index} data={item} />
      ))}
    </div>
  );
};

export default CardGroup;