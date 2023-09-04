import Image from 'next/image';
import React from 'react';
export interface PetProps {
  id: number;
  petName: string;
  petColor: string;
  petOwner: string;
  lgt: string;
  ltd: string;
  petBreed: string;
  petDescription: string;
}

const ArticleCard = ({ data }: { data: PetProps }) => {
  return (
    <div className='w-pet-cards h-fit pb-6 mt-4 h-96 border-4 rounded-lg border-black'>
      <Image
        src='/images/front_page_news_bg.jpg'
        alt='pet_image'
        width={300}
        height={200}
        className='rounded-t-sm'
      />
      <h2 className='flex text-3xl font-bold w-full justify-center my-2'>
        {data.petName}
      </h2>
      <ul className='list-disc px-6'>
        <li>
          <span className='font-bold'>Breed:</span> {data.petBreed}
        </li>
        <li>
          <span className='font-bold'>Color:</span> {data.petColor}
        </li>
        <li>
          <span className='font-bold'>Owner:</span> {data.petOwner}
        </li>
      </ul>
    </div>
  );
};

export default ArticleCard;
