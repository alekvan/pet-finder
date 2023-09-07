import Image from 'next/image';
import React from 'react';

export interface PetProps {
  id: number;
  petName: string;
  petColor: string;
  petPictures: string[];
  petOwner: string;
  lgt: string;
  ltd: string;
  petBreed: string;
  petDescription: string;
}

const ArticleCard = ({ data }: { data: PetProps }) => {
  return (
    <div className='w-pet-cards h-fit pb-6 mt-4 border-2 rounded-lg border-black'>
      <div className='w-full h-52 relative'>
        {data.petPictures.map((imgUrl) => (
          <Image
            src={imgUrl}
            alt='pet_image'
            placeholder='blur'
            blurDataURL={imgUrl}
            key={imgUrl}
            className='rounded-t-md'
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            style={{
              objectFit: 'cover',
            }}
          />
        ))}
      </div>
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
