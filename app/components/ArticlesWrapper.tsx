import React from 'react';
import ArticleCard from './ArticleCard';
import data from '../../dummyData.json';

const ArticlesWrapper = () => {
  return (
    <div className='flex flex-wrap justify-around py-4 lg:px-52 bg-gradient-to-br from-blue-light '>
      {data.map((petData) => (
        <ArticleCard key={petData.id} data={petData} />
      ))}
    </div>
  );
};

export default ArticlesWrapper;
