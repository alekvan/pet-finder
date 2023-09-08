'use client';
import ArticlesWrapper from './components/ArticlesWrapper';

export default function Home() {
  return (
    <>
      <div className='lg:bg-front-page-img bg-mobile-page-img bg-cover w-full h-screen pt-12 pl-10 lg:pt-24 lg:pl-28'>
        <section className='lg:w-1/3 mr-4 text-blue-dark lg:text-orange-dark font-semibold md:max-lg:text-orange-dark '>
          <h2 className='lg:text-6xl text-2xl font-bold mb-4'>
            Welcome Section
          </h2>
          <p className='lg:text-lg text-base backdrop-blur-sm'>
            Lorem Ipsum е едноставен модел на текст кој се користел во
            печатарската индустрија. Lorem ipsum бил индустриски стандард кој се
            користел како модел уште пред 1500 години, кога непознат печатар зел
            кутија со букви и ги сложил на таков начин за да направи примерок на
            книга. И не само што овој модел опстанал пет векови туку почнал да
            се користи и во електронските медиуми, кој се уште не е променет. Се
            популаризирал во 60-тите години на дваесеттиот век со издавањето на
            збирка од страни во кои се наоѓале Lorem Ipsum пасуси, а денес во
            софтверскиот пакет како што е Aldus PageMaker во кој се наоѓа
            верзија на Lorem Ipsum.
          </p>
        </section>
      </div>
      <ArticlesWrapper />
    </>
  );
}
