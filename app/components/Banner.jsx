import React from 'react'

const Banner = () => {
  return (
    <section className='bg-blue-600 text-white py-12 banner-bg flex items-end lg:h-screen'>
      <div className='container mx-auto px-4 text-center md:text-left'>
        <div className='drop-shadow-2xl	'>
          <h1 className='md:!text-[100px] md:text-6xl font-bold leading-tight'>
            <span className='flex'>
              <span className='italic text-yellow-custom'>Rent. &nbsp;</span>
              <span className='stroke-yellow-500'> Play. Own.</span>
            </span>
            IN THE WORLDS FIRST <br /> CASINO METAVERSE
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center '>
          <div>
            <p className='text-lg md:text-[28px] leading-10 my-10'>
              Your casino in iconic cities, your rules. Become a LuckHunter!
            </p>
          </div>
          <div className='flex flex-col md:flex-row md:justify-end space-y-4 md:space-y-0 md:space-x-0'>
            <button className='px-6 py-3 bg-white font-normal  banner-btn-left md:h-[100px] md:w-[320px]'>
              GET STARTED
            </button>
            <button className='px-6 py-3 text-white font-normal banner-btn-right md:h-[100px] md:w-[320px]'>
              EXPLORE CITIES
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
